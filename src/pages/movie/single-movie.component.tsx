import { Rate } from 'antd'
import { useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import Image from '../../components/image/image.component'
import MovieDescription from '../../components/movie-description-card/description.component'
import { useVideo } from '../../hook/api/movie-video.hook'
import { useMovie } from '../../hook/api/single-movie.hook'
import { useIsMobile } from '../../hook/ui/is-mobile.hook'
import { changeLoadProcess } from '../../store/reducers/settingsSlice'
import { RootState } from '../../store/store'
import Styles from './single-movie.styles'

const SingleMovie = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const isMobile = useIsMobile()
  const {
    state: { id }
  } = useLocation()
  const {
    language: { key: language },
    mode
  } = useSelector((state: RootState) => state.settings)
  const { movie, isLoading: isLoadingMovie } = useMovie({
    language,
    id
  })
  const { video, isLoading: isLoadingVideo } = useVideo({
    language,
    movieId: id
  })

  useEffect(() => {
    !isLoadingMovie && !isLoadingVideo
      ? dispatch(changeLoadProcess(false))
      : dispatch(changeLoadProcess(true))
  }, [isLoadingMovie, isLoadingVideo])

  const src = useMemo(() => {
    return video?.results?.[video?.results?.length - 1]?.key
  }, [video])

  return (
    <Styles isMobile={isMobile} mode={mode}>
      <div className="SingleMovie__header">
        <Image
          src={movie.poster_path}
          loaderClassName={'SingleMovie__header-image-loading'}
          imageClassName={'SingleMovie__header-image'}
          loaderWidth={'70px'}
          loaderStrokeWidth={'4'}
        />
        <MovieDescription mode={mode} movie={movie} />
      </div>
      <div className="SingleMovie__about">
        <div className="SingleMovie__about-header">{t('about-film')}</div>
        <span className="SingleMovie__about-overview">{movie.overview}</span>
      </div>
      <div className="SingleMovie__video-container">
        <div className="SingleMovie__video-description">
          {isMobile ? (
            <>
              <div className="SingleMovie__video-description-container">
                <span className="fs-20">
                  {t('movie-rating')}: <strong>{movie?.vote_average}</strong>
                </span>
                <span className="fs-18">
                  {t('total-votes')}: <strong>{movie?.vote_count}</strong>
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
                  {t('movie-rating')}: <strong>{movie?.vote_average}</strong>
                </span>
                <span className="fs-18">
                  {t('total-votes')}: <strong>{movie?.vote_count}</strong>
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
