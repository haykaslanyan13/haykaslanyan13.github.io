import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Movie from '../../components/movie/movie.component'
import DataPagination from '../../components/pagination/pagination.component'
import { usePopulars } from '../../hook/api/populars.hook'
import { useIsMobile } from '../../hook/ui/is-mobile.hook'
import { usePagination } from '../../hook/ui/pagination.hook'
import { changeLoadProcess } from '../../store/reducers/settingsSlice'
import { RootState } from '../../store/store'
import { scrollToTop } from '../../utils/scroll'
import Styles from './movies.styles'

const Movies = () => {
  const dispatch = useDispatch()
  const { page, onPage } = usePagination()
  const isMobile = useIsMobile()
  const { language } = useSelector((state: RootState) => state.settings)
  const { populars, isLoading } = usePopulars({
    language: language.key,
    page
  })
  const [data, setData] = useState<any>(populars)

  useEffect(() => {
    Object.keys(populars).length && setData(populars)
  }, [populars])

  useEffect(() => {
    dispatch(changeLoadProcess(isLoading))
  }, [isLoading])

  const scrollIntoView = () => {
    setTimeout(() => {
      scrollToTop()
    }, 500)
  }

  return (
    <Styles isMobile={isMobile}>
      <DataPagination total={1000} perPage={20} onPage={onPage} page={page} />
      <div className="MoviesView__movie-container">
        {data?.results?.map((movie: any, key: number) => {
          return (
            <Movie
              id={movie.id}
              rating={movie.vote_average}
              src={movie.poster_path}
              key={key}
              title={movie.title}
              movie={movie}
            />
          )
        })}
      </div>
      <DataPagination
        total={1000}
        perPage={20}
        onPage={(page: number) => {
          scrollIntoView()
          onPage(page)
        }}
        page={page}
      />
    </Styles>
  )
}

export default Movies
