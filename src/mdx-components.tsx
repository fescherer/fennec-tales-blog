/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import type { MDXComponents } from 'mdx/types'
import { DetailedHTMLProps, ImgHTMLAttributes } from 'react'
import Link from 'next/link'
import { slugyfy } from './utils/slugfy'
import { Pre, Link as PrimitiveLink } from './components'

interface IImg extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  source?: string
  name: string
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 id={slugyfy(children?.toString() || '')} className="inline-block scroll-m-24 text-4xl font-medium text-primary-label-primary">
        <a href={`#${slugyfy(children?.toString() || '')}`}>{children}</a>
      </h1>
    ),
    h2: ({ children }) => (
      <h2 id={slugyfy(children?.toString() || '')} className="mb-2 mt-5 inline-block scroll-m-24 text-3xl font-medium text-primary-label-primary">
        <a href={`#${slugyfy(children?.toString() || '')}`}>{children}</a>
      </h2>
    ),
    h3: ({ children }) => (
      <h3 id={slugyfy(children?.toString() || '')} className="mb-2 mt-5 inline-block scroll-m-24 text-2xl font-medium text-primary-label-primary">
        <a href={`#${slugyfy(children?.toString() || '')}`}>{children}</a>
      </h3>
    ),
    h4: ({ children }) => (
      <h4 id={slugyfy(children?.toString() || '')} className="mb-2 mt-5 inline-block scroll-m-24 text-xl font-medium text-primary-label-primary">
        <a href={`#${slugyfy(children?.toString() || '')}`}>{children}</a>
      </h4>
    ),
    h5: ({ children }) => (
      <h5 id={slugyfy(children?.toString() || '')} className="mb-2 mt-5 inline-block scroll-m-24 text-lg font-medium text-primary-label-primary">
        <a href={`#${slugyfy(children?.toString() || '')}`}>{children}</a>
      </h5>
    ),
    h6: ({ children }) => (
      <h6 id={slugyfy(children?.toString() || '')} className="mb-2 mt-5 inline-block scroll-m-24 font-medium text-primary-label-primary">
        <a href={`#${slugyfy(children?.toString() || '')}`}>{children}</a>
      </h6>
    ),
    table: ({ children, ...props }: any) => (
      <table className="border-collapse" {...props}>{children}</table>
    ),
    p: ({ children, ...props }: any) => (
      <p className="my-3 leading-normal tracking-wider text-primary-label-secondary" {...props}>{children}</p>
    ),
    hr: ({ children, ...props }: any) => (
      <hr className="text-primary-label-tertiary" {...props}>{children}</hr>
    ),
    th: ({ children, ...props }: any) => (
      <th className="border border-secondary bg-secondary text-center" {...props}>
        {children}
      </th>
    ),
    tr: ({ children, ...props }: any) => (
      <tr className="" {...props}>
        {children}
      </tr>
    ),
    td: ({ children, ...props }: any) => (
      <td className="border border-secondary px-6 py-2 text-center" {...props}>
        {children}
      </td>
    ),
    // How to create a copy code button https://claritydev.net/blog/copy-to-clipboard-button-nextjs-mdx-rehype
    pre: ({ ...props }: any) => (<Pre {...props} />),

    a: ({ children, ...props }: any) => (
      <PrimitiveLink aria-label={`Go to ${children}`} {...props} target="_blank" className="tracking-wide text-accent transition-all hover:border-b hover:border-b-accent-active hover:text-accent-active">{children}</PrimitiveLink>
    ),

    ul: ({ children, ...props }: any) => (
      <ul className="ml-4 list-disc" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }: any) => (
      <ol className="list-decimal" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }: any) => (
      <li className="ml-4" {...props}>
        {children}
      </li>
    ),
    Blockquote: ({ children, ...props }: any) => (
      <blockquote className=" mt-6 border-l-2 border-l-primary pl-6 italic" {...props}>
        {children}
      </blockquote>
    ),
    Img: (props: IImg) => {
      const { source, ...rest } = props

      if (source) {
        return (
          <figure>
            <Link href={source} target="_blank">
              <img {...rest} className="m-auto" />
            </Link>

            <figcaption className="text-center">
              <span className="font-bold">
                {props.name}
                .
              </span>

              <span> Ref.</span>

              <PrimitiveLink href={source} target="_blank">
                {source}
              </PrimitiveLink>
            </figcaption>
          </figure>
        )
      } else return (
        <figure>
          <img {...props} className="m-auto" />

          <figcaption className="text-center font-bold">
            {props.name}
          </figcaption>
        </figure>
      )
    },
    ...components,
  }
}
