import { CopyBtn } from '../copy-btn'

export function Pre({ children, raw, ...props }: any) {
  const lang = (props['data-language']) || 'shell'
  return (
    <pre {...props} className="my-10 whitespace-pre-wrap rounded-md *:text-wrap">
      <span className="flex justify-between bg-secondary px-4 py-2 uppercase">
        {lang}
        <CopyBtn text={raw || ''} />
      </span>

      <span className="p-2">
        {children}
      </span>
    </pre>
  )
}
