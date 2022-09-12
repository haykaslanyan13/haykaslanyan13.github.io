import { Rate } from 'antd'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useSelector } from 'react-redux'

import { useIsMobile } from '../../hook/ui/is-mobile.hook'
import { RootState } from '../../store/store'
import Styles from './movie.styles'

interface MovieProps {
  src: string
  rating: number
  title: string
  id: string | number
}

const Movie = ({ src, rating, title }: MovieProps) => {
  const isMobile = useIsMobile()
  const { mode } = useSelector((state: RootState) => state.settings)
  return (
    <Styles isMobile={isMobile} mode={mode}>
      <div className="Movie">
        <div className="Movie__image-container">
          <LazyLoadImage
            alt=""
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${src}`}
            className="Movie__image"
          />
          {/*<div className="Movie__image-loading" />*/}
          <div className="Movie__image-description">
            <span className="Movie__image-description-title">{title}</span>
            <span className="Movie__image-description-item">Year: 2002</span>
            <span className="Movie__image-description-item">
              Total votes: 1456
            </span>
            <span className="Movie__image-description-item">
              Popularity: 8546
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
