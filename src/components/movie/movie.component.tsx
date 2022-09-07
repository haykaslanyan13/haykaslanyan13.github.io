import { Rate } from 'antd'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import Styles from './movie.styles'

interface MovieProps {
  src: string
  rating: number
  title: string
}

const Movie = ({ src, rating, title }: MovieProps) => {
  return (
    <Styles>
      <div className="Movie">
        <div className="Movie__image-container">
          <LazyLoadImage
            alt=""
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${src}`}
            className="Movie__image"
          />
          <div className="Movie__image-description"></div>
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
