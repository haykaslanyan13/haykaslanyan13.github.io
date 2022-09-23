import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import MovieCard from '../../components/top-movie-card/movie-card.component'
import { Routes } from '../../enums/routes.enum'
import { useNowPlaying } from '../../hook/api/now-playing.hook'
import { RootState } from '../../store/store'
import { getRoute } from '../../utils/route'
import { scrollToTop } from '../../utils/scroll'
import Styles from './cinema.styles'

const Cinema = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { mode, language } = useSelector((state: RootState) => state.settings)
  const {
    nowPlayingMovies: { results: movies }
  } = useNowPlaying({
    language: language.key
  })

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
    <Styles mode={mode}>
      <strong className="Cinema__title">{t('to-the-cinema')}</strong>
      {movies?.slice(0, 10)?.map((movie: any, key: number) => {
        return (
          <MovieCard
            onClick={() => {
              navigateToView(movie)
            }}
            movie={movie}
            mode={mode}
            key={key}
          />
        )
      })}
    </Styles>
  )
}

export default Cinema
