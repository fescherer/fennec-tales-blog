import { PropsWithPost } from '@/@types'
import { DATA } from '@/app.config'
import { Card } from '@/components/card'
import Link from 'next/link'

export function PostEditThisArticle({ post }: PropsWithPost) {
  return (
    <Card title="Help us improve">
      <p className="mx-2 my-4">
        If you find any mistakes or just want to make the article more complete, consider editing this page in Github.
      </p>

      <Link target="_blank" href={`${DATA.repo}/blob/main/src/blog/${post.category}/${post.slug}.mdx`} className="flex items-center justify-between gap-5 rounded p-2 transition-all hover:bg-secondary hover:text-secondary-label-primary">
        <div className="flex items-center gap-1">
          <span className="mui-icon-filled">edit_square</span>
          <span className="underline">Edit on Github</span>
        </div>

        <span className="mui-icon-filled">open_in_new</span>
      </Link>

      <Link target="_blank" href="https://github.com/fescherer/utils/blob/main/CONTRIBUTING.md" className="flex items-center justify-between gap-5 rounded p-2 transition-all hover:bg-secondary hover:text-secondary-label-primary">
        <div className="flex items-center gap-1">
          <span className="mui-icon-filled">description</span>
          <span className="underline">Contribution guide</span>
        </div>

        <span className="mui-icon-filled">open_in_new</span>
      </Link>
    </Card>
  )
}
