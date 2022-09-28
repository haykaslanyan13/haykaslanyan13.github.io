import { Rate } from 'antd'
import moment from 'moment'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Routes } from '../../enums/routes.enum'
import { useIsMobile } from '../../hook/ui/is-mobile.hook'
import { RootState } from '../../store/store'
import { getRoute } from '../../utils/route'
import { scrollToTop } from '../../utils/scroll'
import Image from '../image/image.component'
import Styles from './movie.styles'

interface MovieProps {
  src: string
  rating: number
  title: string
  id: string | number
  movie: Record<string | number, any>
}

const Movie = ({ src, rating, title, movie }: MovieProps) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const isMobile = useIsMobile()
  const { mode } = useSelector((state: RootState) => state.settings)
  const navigateToView = () => {
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
    <Styles onClick={navigateToView} isMobile={isMobile} mode={mode}>
      <div className="Movie">
        <div className="Movie__image-container">
          <Image
            src={src}
            loaderStrokeWidth={'4'}
            loaderWidth={'80px'}
            imageClassName={'Movie__image'}
            loaderClassName={'Movie__image-loading'}
          />
          <div className="Movie__image-description">
            <span className="Movie__image-description-title">{title}</span>
            <span className="Movie__image-description-item">
              {t('year')}: {moment(movie.release_date).format('YYYY')}
            </span>
            <span className="Movie__image-description-item">
              {t('total-votes')}: {movie.vote_count}
            </span>
            <span className="Movie__image-description-item">
              {t('popularity')}: {Math.floor(movie.popularity)}
            </span>
            <div className="Movie__image-description-rating-container">
              <span className="Movie__image-description-rating Movie__image-description-rating-value">
                {movie.vote_average}
              </span>
            </div>
          </div>
        </div>
        <Rate
          value={rating}
          className="Movie__rating"
          allowHalf
          count={10}
          disabled
        />
        <span className="Movie__title">{title}</span>
      </div>
    </Styles>
  )
}

export default Movie
