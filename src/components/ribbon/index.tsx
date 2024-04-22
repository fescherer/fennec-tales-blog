type RibbonProps = {
  title: string
}

export function Ribbon({ title }: RibbonProps) {
  return (
    <div className="absolute -right-2 top-1 rounded rounded-ee-none bg-accent px-2 text-sm leading-relaxed text-accent-label-primary transition-all hover:brightness-75">
      <span>{title}</span>
      <div className="absolute end-0 border-4 border-b-transparent border-e-transparent border-r-transparent text-accent brightness-75" />
    </div>
  )
}
