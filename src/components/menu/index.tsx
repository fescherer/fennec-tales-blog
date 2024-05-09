import { PropsWithClassName } from '@/@types/classname'
import { Separator } from '../separator'

export function Menu({ className }: PropsWithClassName) {
  return (
    <aside className={`${className} relative w-52 px-2`}>
      <div className="sticky left-16 top-[66px] flex w-full flex-col">

        <span>About us</span>
        <span>Services</span>
        <span>Portifolio</span>
        <Separator layer="primary" className="my-2" />
        <span>NEW VIDEO preview from channel</span>
        <span>new short video preview</span>
        <Separator layer="primary" className="my-2" />
        <span>social medias</span>
        <Separator layer="primary" className="my-2" />
        <span>Saved articles localstorage</span>
        <span>COnfig- theme</span>
        <span>Notifications- news about the blog - commits, pr etc</span>
      </div>
    </aside>
  )
}
