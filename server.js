import { exec } from 'node:child_process'
import { readFile } from 'node:fs'
import { createServer } from 'node:http'
import { networkInterfaces, platform } from 'node:os'
import { extname } from 'node:path'

import { generatePages } from './script/generate_pages.js'

const port = process.env.PORT ?? 3000

const fileExtensionToMimeTypeMap = new Map()
  .set('css', 'text/css; charset=UTF-8')
  .set('html', 'text/html; charset=UTF-8')
  .set('ico', 'image/vnd.microsoft.icon')
  .set('jpg', 'image/jpg')
  .set('js', 'text/javascript; charset=UTF-8')
  .set('json', 'application/json; charset=UTF-8')
  .set('png', 'image/png')
  .set('svg', 'image/svg+xml; charset=UTF-8')
  .set('woff2', 'font/woff2')

await generatePages()

const server = createServer((req, res) => {
  // Ignore URLs like Chrome DevTools
  // /.well-known/appspecific/com.chrome.devtools.json
  if (req.url.startsWith('/.well-known')) return

  const url = req.url == '/' ? '/index.html' : req.url
  const fileExtension = extname(url).substring(1).toLowerCase()
  const mimeType = fileExtensionToMimeTypeMap.get(fileExtension)

  if (!mimeType) {
    console.error(`Unknown mime type for ${req.url}`)
    res.writeHead(501).end('Unknown mime type')
    return
  }

  // Assuming (req.method == 'GET')
  readFile(`.${url}`, (err, data) =>
    err
      ? res.writeHead(400).end('Not found')
      : res.writeHead(200, { 'Content-Type': mimeType }).end(data)
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
