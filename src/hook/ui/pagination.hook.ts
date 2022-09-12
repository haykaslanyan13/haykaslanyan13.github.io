import { useEffect, useState } from 'react'

interface UsePagination {
  page: number
  onPage: (page: number) => void
}

export const usePagination = (deps: any[] = []): UsePagination => {
  const [page, setPage] = useState(1)

  useEffect(() => {
    setPage(1)
  }, deps)

  const onPage = (page: number) => {
    setPage(page)
  }

  return {
    page,
    onPage
  }
}
