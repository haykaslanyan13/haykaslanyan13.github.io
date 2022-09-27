import { Rate } from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FadeLoader } from 'react-spinners'

import { Routes } from '../../enums/routes.enum'
import { useIsMobile } from '../../hook/ui/is-mobile.hook'
import { RootState } from '../../store/store'
import { getRoute } from '../../utils/route'
import { scrollToTop } from '../../utils/scroll'
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
  const [isLoading, setIsLoading] = useState(true)
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
    <Styles
      isLoading={isLoading}
      onClick={navigateToView}
      isMobile={isMobile}
      mode={mode}
    >
      <div className="Movie">
        <div className="Movie__image-container">
          <LazyLoadImage
            afterLoad={() => {
              setIsLoading(false)
            }}
            alt=""
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${src}`}
            className="Movie__image"
          />
          <div className="Movie__image-loading">
            <FadeLoader
              className="Movie__image-loading-spinner"
              loading={isLoading}
            />
          </div>
          <div className="Movie__image-description">
            <span className="Movie__image-description-title">{title}</span>
            <span className="Movie__image-description-item">
              {t('year')}: 2002
            </span>
            <span className="Movie__image-description-item">
              {t('total-votes')}: 1456
            </span>
            <span className="Movie__image-description-item">
              {t('popularity')}: 8546
            </span>
            <div className="Movie__image-description-rating-container">
              <span className="Movie__image-description-rating Movie__image-description-rating-value">
                6.7
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
