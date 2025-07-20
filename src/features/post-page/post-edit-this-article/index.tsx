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

      <Link target="_blank" href={`${DATA.repo}/blob/main/src/blog/${post.category}/${post.slug}.mdx`} className="flex items-center justify-between gap-5 rounded-sm p-2 transition-all hover:bg-primary hover:text-secondary-label-primary">
        <div className="flex items-center gap-1">
          <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" /></svg></span>
          <span className="underline">Edit on Github</span>
        </div>

        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" /><path d="m21 3-9 9" /><path d="M15 3h6v6" /></svg></span>
      </Link>

      <Link target="_blank" href="https://github.com/fescherer/utils/blob/main/CONTRIBUTING.md" className="flex items-center justify-between gap-5 rounded-sm p-2 transition-all hover:bg-primary hover:text-secondaryLabel-primary">
        <div className="flex items-center gap-1">
          <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18H3" /><path d="M17 6H3" /><path d="M21 12H3" /></svg></span>
          <span className="underline">Contribution guide</span>
        </div>

        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" /><path d="m21 3-9 9" /><path d="M15 3h6v6" /></svg></span>
      </Link>
    </Card>
  )
}
