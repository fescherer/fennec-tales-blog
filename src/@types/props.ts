export type PropsWithSearchProps<P = unknown> = P & {
  searchParams?: {
    query?: string
    page?: string
  }
}
