import { exec } from 'node:child_process'
import { readFile } from 'node:fs'
import { createServer } from 'node:http'
import { networkInterfaces, platform } from 'node:os'

import { generatePages } from './script/generate_pages.js'

const port = process.env.PORT ?? 3000

await generatePages()

const server = createServer((req, res) => {
  // Ignore URLs like Chrome DevTools
  // /.well-known/appspecific/com.chrome.devtools.json
  if (req.url.startsWith('/.well-known')) return

  // Assuming (req.method == 'GET')
  readFile(`.${req.url == '/' ? '/index.html' : req.url}`, (err, data) =>
    err ? res.writeHead(400).end() : res.end(data)
  )
})

server.listen(port, () => {
  const serverPort = server.address().port
  const localUrl = `http://localhost:${serverPort}`
  let externalUrl = localUrl

  // Look for IPv4 net interface.
  const nets = networkInterfaces()
  for (const name of Object.keys(nets))
    for (const net of nets[name])
      if (net.family === 'IPv4' && !net.internal) {
        externalUrl = new URL(`http://${net.address}:${serverPort}`)
        break
      }

  // Open default browser.
  switch (platform()) {
    case 'darwin':
      exec(`open ${localUrl}`)
    case 'linux':
      exec(`xdg-open ${localUrl}`)
    case 'win32':
      exec(`start ${localUrl}`)
    default:
      console.info(`Server started on ${externalUrl}`)
  }
})
