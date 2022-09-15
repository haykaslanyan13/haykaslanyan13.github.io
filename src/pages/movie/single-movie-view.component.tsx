import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import MovieDescription from '../../components/movie-description-card/description.component'
import { useMovie } from '../../hook/api/single-movie.hook'
import { RootState } from '../../store/store'
import Styles from './single-movie-view.styles'

const SingleMovie = () => {
  const {
    state: { id }
  } = useLocation()
  const {
    language: { key: language }
  } = useSelector((state: RootState) => state.settings)
  const { movie } = useMovie({
    language,
    id
  })

  return (
    <Styles>
      <div className="SingleMovie__header">
        <LazyLoadImage
          src={`${process.env.REACT_APP_IMAGE_BASE_URL}${movie.poster_path}`}
          className="SingleMovie__header-image"
        />
        <MovieDescription movie={movie} />
      </div>
    </Styles>
  )
}

export default SingleMovie
