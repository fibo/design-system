import { readFile, writeFile } from 'node:fs/promises'
import { dirname, extname, join, parse } from 'node:path'
import markdownItParser from 'markdown-it'
import * as prettier from 'prettier'
import prettierConfig from '../.prettierrc.js'

const rootDir = dirname(import.meta.dirname)

/**
 * List of input files to generate HTML files in pages/ folder.
 *
 * Input files can be in html/ or doc/ folder according to the extension.
 */
const pages = [
  'homepage.html',
  'heading.html',
  'login.html',
  'favicon.md',
  'principles.md'
]

const markdownIt = markdownItParser()

async function getHtml(fileName) {
  const extension = extname(fileName)

  // If it is an HTML file, just strip the comments.
  if (extension === '.html') {
    const content = await readFile(join('html', fileName), 'utf-8')
    return content.replace(/<!--[\s\S]*?-->/g, '')
  }

  // If it is a markdown, convert it to HTML.
  if (extension === '.md') {
    const content = await readFile(join('doc', fileName), 'utf-8')
    return markdownIt.render(content)
  }
}

const head = await getHtml('_head.html', 'utf-8')

function getHead(pageName) {
  let CSS_DIR = './css'
  if (pageName !== 'homepage') CSS_DIR = '.' + CSS_DIR
  return head.replaceAll('CSS_DIR', CSS_DIR)
}

function outputPath(pageName) {
  if (pageName === 'homepage') return join(rootDir, 'index.html')
  return join(rootDir, 'page', `${pageName}.html`)
}

async function generatePage(inputfileName) {
  const pageName = parse(inputfileName).name
  const content = await getHtml(inputfileName)

  const html = await prettier.format(
    `<!doctype html>
    ${getHead(pageName)}<body>${content}</body>`,
    { parser: 'html', ...prettierConfig }
  )

  await writeFile(outputPath(pageName), html)
}

export async function generatePages() {
  for (const fileName of pages) {
    await generatePage(fileName)
  }
}

if (import.meta.main) {
  generatePages()
}
