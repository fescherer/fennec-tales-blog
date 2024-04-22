export interface IPost {
  slug: string
  category: string
  title: string
  published_date: string
  updated_at: string
  image: string
  alt: string
  video_url: string
  project_url: string
  figma_url: string
  github_url: string
  tags: string[]
  author: string
  sources: ISourceReference[]
  content: string
}

export interface ISourceReference {
  date: string
  title: string
  link: string
}

export interface IRecommendedPost {
  id: string
  points: number
  post: IPost
}

export interface IPostHeading {
  level: 1 | 2 | 3
  title: string
}

export type PropsWithPost<P = unknown> = P & { post: IPost }
