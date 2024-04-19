import Image from 'next/image'

type BlogCardProps = {
  orientation?: 'horizontal' | 'vertical'
}

export function BlogCard({ orientation = 'horizontal' }: BlogCardProps) {
  const classOrientation = orientation === 'vertical' ? 'flex-col' : orientation === 'horizontal' ? 'flex-row' : ''
  return (
    <div className={`flex ${classOrientation} bg-gray-500`}>
      <Image src="/teste.png" width={100} height={100} alt="image" />

      <div>
        <span>Personal</span>

        <div>
          <h2>Game Off 2023</h2>
          <p className="line-clamp-3">his blog post is my journey into Game Off 2023 by Github and Lee Reilly,  started on November 01 and ended December 01. It&apos;s my very first big  game project, I am so exited! I will update this page every day, telling  what I did and</p>
        </div>

        <div className="h-1 w-full border-b border-black" />

        <div className="flex justify-between">
          <span>Nov 10</span>
          <span>13 minutes</span>
        </div>
      </div>
    </div>
  )
}
