import { useSelector } from 'react-redux'

import MovieCard from '../../components/top-movie-card/movie-card.component'
import { useNowPlaying } from '../../hook/api/now-playing.hook'
import { RootState } from '../../store/store'
import Styles from './cinema.styles'

const Cinema = () => {
  const { mode, language } = useSelector((state: RootState) => state.settings)
  const {
    nowPlayingMovies: { results: movies }
  } = useNowPlaying({
    language: language.key
  })

  return (
    <Styles mode={mode}>
      <strong className="Cinema__title">To The Cinema</strong>
      {movies?.slice(0, 10)?.map((movie: any, key: number) => {
        return <MovieCard movie={movie} mode={mode} key={key} />
      })}
    </Styles>
  )
}

export default Cinema
