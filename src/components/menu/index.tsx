import { PropsWithClassName } from '@/@types/classname'

export function Menu({ className }: PropsWithClassName) {
  return (
    <aside className={`${className} relative w-52 px-2`}>
      <div className="sticky left-16 top-[66px] flex w-full flex-col">

        <span>About us</span>
        <span>Services</span>
        <span>Portifolio</span>
        <div className="my-2 border-b" />
      </div>
    </aside>
  )
}
