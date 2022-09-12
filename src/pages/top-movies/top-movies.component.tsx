import { useSelector } from 'react-redux'

import { RefreshIcon } from '../../assets/media/icons'
import MovieCard from '../../components/top-movie-card/movie-card.component'
import { useTopMovies } from '../../hook/api/top-rated-movies.hook'
import { RootState } from '../../store/store'
import Styles from './top-movies.styles'

const TopMovies = () => {
  const { language, mode } = useSelector((state: RootState) => state.settings)
  const {
    topMovies: { results: movies }
  } = useTopMovies({ language: language.key, page: 1 })

  return (
    <Styles mode={mode}>
      <div className="TopMovies">
        <span className="TopMovies-title">Top Movies</span>
        <RefreshIcon className="TopMovies-refresh-icon" />
      </div>
      {movies?.slice(0, 10)?.map((movie: any, key: number) => {
        return <MovieCard movie={movie} key={key} mode={mode} />
      })}
    </Styles>
  )
}

export default TopMovies
