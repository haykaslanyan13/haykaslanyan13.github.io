import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { RefreshIcon } from '../../assets/media/icons'
import MovieCard from '../../components/top-movie-card/movie-card.component'
import { useTopMovies } from '../../hook/api/top-rated-movies.hook'
import { useIsMobile } from '../../hook/ui/is-mobile.hook'
import { RootState } from '../../store/store'
import Styles from './top-movies.styles'

const TopMovies = () => {
  const isMobile = useIsMobile()
  const { language, mode } = useSelector((state: RootState) => state.settings)
  const [randomPage, setRandomPage] = useState(Math.floor(Math.random() * 500))
  const { topMovies } = useTopMovies({
    language: language.key,
    page: randomPage
  })
  const [movies, setMovies] = useState(topMovies?.results)

  useEffect(() => {
    Object.keys(topMovies)?.length && setMovies(topMovies.results)
  }, [topMovies])

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
        return <MovieCard movie={movie} key={key} mode={mode} />
      })}
    </Styles>
  )
}

export default TopMovies
