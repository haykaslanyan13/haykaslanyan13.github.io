import moment from 'moment'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import Styles from './movie-card.styles'

interface MovieCard {
  movie: any
  mode?: 'light' | 'night'
  onClick?: (event: any) => void
}

const MovieCard = ({ movie, mode = 'light', ...props }: MovieCard) => {
  return (
    <Styles {...props} mode={mode}>
      <div className="TopMovie-card">
        <LazyLoadImage
          className="TopMovie-card__image"
          alt=""
          src={`${process.env.REACT_APP_IMAGE_BASE_URL}${movie.poster_path}`}
        />
        <div className="TopMovie-card__content">
          <strong className="fw-800">{movie.title}</strong>
          <small className="grey">
            Year:{' '}
            <strong className="fw-800 grey">
              {moment(movie.release_date).format('YYYY')}
            </strong>
          </small>
          <small className="grey">
            Total Votes:{' '}
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
