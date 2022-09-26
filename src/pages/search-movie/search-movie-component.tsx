import { Skeleton } from 'antd'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import DataPagination from '../../components/pagination/pagination.component'
import Movie from '../../components/search-movie-card/movie-card.component'
import { useSearchMovies } from '../../hook/api/search-movies.hook'
import { usePagination } from '../../hook/ui/pagination.hook'
import { RootState } from '../../store/store'
import { scrollToTop } from '../../utils/scroll'
import Styles from './serach-movie.styles'

const SearchMovie = () => {
  const {
    language: { key: language },
    mode
  } = useSelector((state: RootState) => state.settings)
  const {
    state: { searchText }
  } = useLocation()
  const { page, onPage } = usePagination()
  const { movies } = useSearchMovies({
    language,
    query: searchText,
    page
  })
  const [data, setData] = useState<any>({})

  useEffect(() => {
    if (Object.keys(movies)?.length) {
      setData(movies)
      scrollToTop()
    }
  }, [movies])

  return (
    <Styles>
      {Object.keys(data)?.length ? (
        data?.results?.length ? (
          <div className="Movies__container-with-pagination">
            <div className="Movies__container">
              {data?.results?.map((movie: any, index: number) => {
                return <Movie mode={mode} movie={movie} key={index} />
              })}
            </div>
            <DataPagination
              page={page}
              onPage={onPage}
              total={data.total_pages}
            />
          </div>
        ) : (
          <div className="Movies__not-found-container">
            <span className="Movies__not-found-text">
              Movie with this name not found
            </span>
          </div>
        )
      ) : (
        <Skeleton active paragraph={{ rows: 20 }} className="Skeleton" />
      )}
    </Styles>
  )
}

export default SearchMovie
