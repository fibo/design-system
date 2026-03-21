import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const pages = ['heading.html']

async function readHtml(filename) {
  return await readFile(join('html', filename), 'utf-8')
}

const head = await readHtml('head.html', 'utf-8')

async function generatePage(filename) {
  const content = await readHtml(filename)
  await writeFile(
    join('pages', filename),
    `
    <!doctype html>
    ${head}
    <body>${content}</body>
  `
  )
}

export async function generatePages() {
  for (const filename of pages) await generatePage(filename)
}

if (import.meta.main) generatePages()
