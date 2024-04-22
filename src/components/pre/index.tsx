// import { CopyBtn } from './copy-btn'

// TODO Corrigir

export function Pre({ children, raw, ...props }: any) {
  // const lang = (props['data-language']) || 'shell'
  console.log(children, raw, props)

  return null

  // return (
  //   <pre {...props} className="my-10 max-w-full overflow-x-auto rounded-md">
  //     <span className="bg-code-header flex w-full justify-between px-4 py-2">
  //       {lang}
  //       <CopyBtn text={(raw as string) || ''} />
  //     </span>

  //     <span className="p-2 ">
  //       {children}
  //     </span>
  //   </pre>
  // )
}
