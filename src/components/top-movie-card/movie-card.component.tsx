import moment from 'moment'
import { useTranslation } from 'react-i18next'

import Image from '../image/image.component'
import Styles from './movie-card.styles'

interface MovieCard {
  movie: any
  mode?: 'light' | 'night'
  onClick?: (event: any) => void
}

const MovieCard = ({ movie, mode = 'light', ...props }: MovieCard) => {
  const { t } = useTranslation()
  return (
    <Styles {...props} mode={mode}>
      <div className="TopMovie-card">
        <Image
          lazyLoad
          loaderWidth={'40px'}
          loaderStrokeWidth={'4'}
          src={movie.poster_path}
          imageClassName={'TopMovie-card__image'}
          loaderClassName={'TopMovie-card__image-loading'}
        />
        <div className="TopMovie-card__content">
          <strong className="fw-800">{movie.title}</strong>
          <small className="grey">
            {t('year')}:{' '}
            <strong className="fw-800 grey">
              {moment(movie.release_date).format('YYYY')}
            </strong>
          </small>
          <small className="grey">
            {t('total-votes')}:{' '}
            <strong className="fw-800 grey">{movie.vote_count}</strong>
          </small>
        </div>
        <div className="TopMovie-card-rating">
          <span className="TopMovie-card-rating__vote fw-800">
            {movie.vote_average}
          </span>
        </div>
      </div>
    </Styles>
  )
}

export default MovieCard
