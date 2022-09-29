import { Pagination, PaginationProps } from 'antd'
import { useSelector } from 'react-redux'

import { RootState } from '../../store/store'
import Styles from './pagination.styles'

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
  const { mode } = useSelector((state: RootState) => state.settings)

  return (
    <Styles mode={mode}>
      <Pagination
        current={page}
        showSizeChanger={false}
        onChange={onPage}
        showLessItems
        total={total}
        pageSize={perPage || 10}
      />
    </Styles>
  )
}

export default DataPagination
