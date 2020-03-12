import path from 'path'
import fs from 'fs'

export function parseContent(folder, content) {
  const contentPath = path.join(process.cwd(), 'content', folder, content)

  if (!fs.existsSync(contentPath)) {
    throw new Error(`path: ${contentPath} does not exist.`)
  }

  return contentPath
}

export function listContent(folder) {
  const contentPath = path.join(process.cwd(), 'content', folder)

  if (!fs.existsSync(contentPath)) {
    throw new Error(`path: ${contentPath} does not exist.`)
  }

  const dirContent = fs.readdirSync(contentPath)
  return dirContent
}
