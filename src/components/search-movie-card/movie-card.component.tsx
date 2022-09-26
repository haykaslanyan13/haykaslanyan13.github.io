import { Rate } from 'antd'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useNavigate } from 'react-router-dom'

import { Routes } from '../../enums/routes.enum'
import { getRoute } from '../../utils/route'
import { scrollToTop } from '../../utils/scroll'
import Styles from './movie-card.styles'

interface IProps {
  movie: Record<string, any>
  mode: 'light' | 'night'
}

const Movie = ({ movie, mode }: IProps) => {
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
    scrollToTop()
  }

  return (
    <Styles
      onClick={() => {
        navigateToView(movie)
      }}
      mode={mode}
    >
      <LazyLoadImage
        className="Movie__image"
        alt=""
        src={`${process.env.REACT_APP_IMAGE_BASE_URL}${movie.poster_path}`}
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
              value={movie.vote_average}
              count={10}
            />
            <div>
              <span>Total votes: </span>
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
