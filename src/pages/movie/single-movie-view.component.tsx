import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useLocation } from 'react-router-dom'

import Styles from './single-movie-view.styles'

const SingleMovie = () => {
  const {
    state: { src }
  } = useLocation()

  return (
    <Styles>
      <div className="SingleMovie__header">
        <LazyLoadImage
          src={`${process.env.REACT_APP_IMAGE_BASE_URL}${src}`}
          className="SingleMovie__header-image"
        />
      </div>
    </Styles>
  )
}

export default SingleMovie
