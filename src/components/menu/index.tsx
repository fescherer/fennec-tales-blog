import { PropsWithClassName } from '@/@types/classname'

export function Menu({ className }: PropsWithClassName) {
  const a = 1
  if (1 === a)
    return <></>
  return (
    <aside className={`${className} relative w-52 px-2`}>
      <div className="sticky left-16 top-[66px] flex w-full flex-col">

        <span>About us</span>
        <span>Services</span>
        <span>Portifolio</span>
        <div className="my-2 divider" />
        <span>NEW VIDEO preview from channel</span>
        <span>new short video preview</span>
        <div className="my-2 divider" />
        <span>social medias</span>
        <div className="my-2 divider" />
        <span>Saved articles localstorage</span>
        <span>COnfig- theme</span>
        <span>Notifications- news about the blog - commits, pr etc</span>
      </div>
    </aside>
  )
}
