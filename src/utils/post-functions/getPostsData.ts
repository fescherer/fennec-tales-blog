import { readdirSync } from 'node:fs'
import { getPostData } from './getPostData'
import type { IPost } from '@/@types/post'

/**
 * import each post in blog directory and return their metadata in an array
 * @returns
 */
export async function getPostsData(): Promise<IPost[]> {
  try {
    // Read the /blog folder at root dir
    const typesListFolder: string[] = readdirSync('./src/blog/')

    let articles: Promise<IPost>[] = []
    if (typesListFolder.length > 0) {
      typesListFolder.forEach((articleType) => {
        const files: string[] = readdirSync(`./src/blog/${articleType}`)

        files.forEach((articleName) => {
          const filename = articleName.substring(0, articleName.lastIndexOf('.')) || articleName
          articles = [...articles, getPostData(articleType, filename)]
        })
      })
      return Promise.all(articles)
    }
  } catch (error) {
    return []
  }
  return []
}
