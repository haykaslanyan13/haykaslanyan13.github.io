import { Pagination, PaginationProps } from 'antd'

interface DataPaginationProps extends PaginationProps {
  page: number
  onPage: (page: number) => void
  total: number
  perPage?: number
}

const DataPagination = ({
  onPage,
  page,
  total,
  perPage
}: DataPaginationProps) => {
  return (
    <Pagination
      current={page}
      showSizeChanger={false}
      onChange={onPage}
      showLessItems
      total={total}
      pageSize={perPage || 10}
    />
  )
}

export default DataPagination
