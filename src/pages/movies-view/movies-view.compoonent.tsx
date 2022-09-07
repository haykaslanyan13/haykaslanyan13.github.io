import { useSelector } from 'react-redux'

import Movie from '../../components/movie/movie.component'
import DataPagination from '../../components/pagination/pagination.component'
import { usePopulars } from '../../hook/api/populars.hook'
import { usePagination } from '../../hook/ui/pagination.hook'
import { RootState } from '../../store/store'
import Styles from './movies.view.styles'

const MoviesView = () => {
  const { page, onPage } = usePagination()
  const { mode, language } = useSelector((state: RootState) => state.settings)
  const { populars } = usePopulars({
    language: language.key,
    page
  })

  return (
    <Styles>
      <DataPagination total={1000} perPage={20} onPage={onPage} page={page} />
      <div className="MoviesView__movie-container">
        {populars.results?.map((movie: any, key: number) => {
          return (
            <Movie
              rating={movie.vote_average}
              src={movie.poster_path}
              key={key}
              title={movie.title}
            />
          )
        })}
      </div>
      <DataPagination total={1000} perPage={20} onPage={onPage} page={page} />
    </Styles>
  )
}

export default MoviesView
