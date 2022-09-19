import { Rate } from 'antd'
import { useMemo } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import MovieDescription from '../../components/movie-description-card/description.component'
import { useVideo } from '../../hook/api/movie-video.hook'
import { useMovie } from '../../hook/api/single-movie.hook'
import { useIsMobile } from '../../hook/ui/is-mobile.hook'
import { RootState } from '../../store/store'
import Styles from './single-movie-view.styles'

const SingleMovie = () => {
  const isMobile = useIsMobile()
  const {
    state: { id }
  } = useLocation()
  const {
    language: { key: language },
    mode
  } = useSelector((state: RootState) => state.settings)
  const { movie } = useMovie({
    language,
    id
  })
  const { video } = useVideo({
    language,
    movieId: id
  })

  const src = useMemo(() => {
    return video?.results?.[video?.results?.length - 1]?.key
  }, [video])

  return (
    <Styles isMobile={isMobile} mode={mode}>
      <div className="SingleMovie__header">
        <LazyLoadImage
          src={`${process.env.REACT_APP_IMAGE_BASE_URL}${movie.poster_path}`}
          className="SingleMovie__header-image"
        />
        <MovieDescription mode={mode} movie={movie} />
      </div>
      <div className="SingleMovie__about">
        <div className="SingleMovie__about-header">About Film</div>
        <span className="SingleMovie__about-overview">{movie.overview}</span>
      </div>
      <div className="SingleMovie__video-container">
        <div className="SingleMovie__video-description">
          {isMobile ? (
            <>
              <div className="SingleMovie__video-description-container">
                <span className="fs-20">
                  Movie rating: <strong>{movie?.vote_average}</strong>
                </span>
                <span className="fs-18">
                  Total votes: <strong>{movie?.vote_count}</strong>
                </span>
              </div>
              <Rate
                disabled
                allowHalf
                value={movie?.vote_average}
                count={10}
                className="SingleMovie__video-rating"
              />
            </>
          ) : (
            <>
              <Rate
                disabled
                allowHalf
                value={movie?.vote_average}
                count={10}
                className="SingleMovie__video-rating"
              />
              <div className="SingleMovie__video-description-container">
                <span className="fs-20">
                  Movie rating: <strong>{movie?.vote_average}</strong>
                </span>
                <span className="fs-18">
                  Total votes: <strong>{movie?.vote_count}</strong>
                </span>
              </div>
            </>
          )}
        </div>
        <div>
          <LiteYouTubeEmbed id={src} title={''} />
        </div>
      </div>
    </Styles>
  )
}

export default SingleMovie
