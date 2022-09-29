import { Rate } from 'antd'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { Routes } from '../../enums/routes.enum'
import { getRoute } from '../../utils/route'
import { scrollToTop } from '../../utils/scroll'
import Image from '../image/image.component'
import Styles from './movie-card.styles'

interface IProps {
  movie: Record<string, any>
  mode: 'light' | 'night'
}

const Movie = ({ movie, mode }: IProps) => {
  const { t } = useTranslation()
  const navigate = useNavigate()

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
    scrollToTop('auto')
  }

  return (
    <Styles
      onClick={() => {
        navigateToView(movie)
      }}
      mode={mode}
    >
      <Image
        src={movie.poster_path}
        imageClassName="Movie__image"
        loaderWidth="45px"
        loaderStrokeWidth="4"
        loaderClassName="Movie__image-loading"
        lazyLoad
      />
      <div className="Movie__container">
        <div className="Movie__container-description-container">
          <div className="Movie__container-description-title">
            {movie.title}
          </div>
          <small className="Movie__container-description">
            {movie.overview}
          </small>
        </div>
        <div className="Movie__container-rating">
          <div className="Movie__container-rating-container">
            <Rate
              className="Movie__container-rating-stars"
              allowHalf
              disabled
              value={movie.vote_average}
              count={10}
            />
            <div>
              <span>{t('total-votes')}: </span>
              <strong>{movie.vote_count}</strong>
            </div>
          </div>
          <div className="Movie__container-rating-vote">
            {movie.vote_average}
          </div>
        </div>
      </div>
    </Styles>
  )
}

export default Movie
