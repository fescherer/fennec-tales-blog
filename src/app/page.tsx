import { BlogCard } from '@/components/BlogCard'

export default function Home() {
  return (
    <main className="m-10 flex flex-col gap-5">
      <BlogCard />
      <BlogCard orientation="vertical" />
    </main>
  )
}
