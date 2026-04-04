import { readFile, writeFile } from 'node:fs/promises'
import { parse, join, extname } from 'node:path'
import markdownItParser from 'markdown-it'
import * as prettier from 'prettier'
import prettierConfig from '../.prettierrc.js'

/**
 * List of input files to generate HTML files in pages/ folder.
 *
 * Input files can be in html/ or doc/ folder according to the extension.
 */
const pages = ['heading.html', 'login.html', 'principles.md']

const markdownIt = markdownItParser()

async function getHtml(filename) {
  const extension = extname(filename)

  if (extension === '.html') {
    return await readFile(join('html', filename), 'utf-8')
  }

  if (extension === '.md') {
    const content = await readFile(join('doc', filename), 'utf-8')
    return markdownIt.render(content)
  }
}

const head = await getHtml('head.html', 'utf-8')

async function generatePage(inputFilename) {
  const outputFilename = `${parse(inputFilename).name}.html`
  const content = await getHtml(inputFilename)

  const html = await prettier.format(
    `
    <!doctype html>
    ${head}
    <body>${content}</body>
  `,
    { parser: 'html', ...prettierConfig }
  )

  await writeFile(join('pages', outputFilename), html)
}

export async function generatePages() {
  for (const filename of pages) {
    await generatePage(filename)
  }
}

if (import.meta.main) {
  generatePages()
}
