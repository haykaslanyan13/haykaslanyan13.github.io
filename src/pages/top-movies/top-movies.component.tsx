import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RefreshIcon } from '../../assets/media/icons'
import MovieCard from '../../components/top-movie-card/movie-card.component'
import { Routes } from '../../enums/routes.enum'
import { useTopMovies } from '../../hook/api/top-rated-movies.hook'
import { useIsMobile } from '../../hook/ui/is-mobile.hook'
import { changeLoadProcess } from '../../store/reducers/settingsSlice'
import { RootState } from '../../store/store'
import { getRoute } from '../../utils/route'
import { scrollToTop } from '../../utils/scroll'
import Styles from './top-movies.styles'

const TopMovies = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isMobile = useIsMobile()
  const { language, mode } = useSelector((state: RootState) => state.settings)
  const [randomPage, setRandomPage] = useState(Math.floor(Math.random() * 500))
  const { topMovies, isLoading } = useTopMovies({
    language: language.key,
    page: randomPage
  })
  const [movies, setMovies] = useState(topMovies?.results)

  useEffect(() => {
    Object.keys(topMovies)?.length && setMovies(topMovies.results)
  }, [topMovies])

  useEffect(() => {
    dispatch(changeLoadProcess(isLoading))
  }, [isLoading])

  const navigateToView = (movie: Record<string, any>) => {
    navigate(
      getRoute(Routes.MOVIE, {
        id: movie.id
      }),
      {
        state: {
          id: movie.id
        }
      }
    )
    scrollToTop()
  }

  return (
    <Styles isMobile={isMobile} mode={mode}>
      <div className="TopMovies">
        <span className="TopMovies-title">Top Movies</span>
        <RefreshIcon
          onClick={() => {
            setRandomPage(Math.floor(Math.random() * 500))
          }}
          className="TopMovies-refresh-icon"
        />
      </div>
      {movies?.slice(0, 10)?.map((movie: any, key: number) => {
        return (
          <MovieCard
            onClick={() => {
              navigateToView(movie)
            }}
            movie={movie}
            key={key}
            mode={mode}
          />
        )
      })}
    </Styles>
  )
}

export default TopMovies
