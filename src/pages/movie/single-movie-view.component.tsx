import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

import { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import MovieDescription from '../../components/movie-description-card/description.component'
import { useMovie } from '../../hook/api/single-movie.hook'
import { api } from '../../managers/api.manager'
import { RootState } from '../../store/store'
import Styles from './single-movie-view.styles'
const SingleMovie = () => {
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
  const [src, setSrc] = useState('')

  useEffect(() => {
    const fetch = async () => {
      const res = await api.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en`
      )
      setSrc(res?.data?.results?.[res?.data?.results?.length - 1]?.key)
    }
    fetch()
  }, [id])

  return (
    <Styles mode={mode}>
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
      <LiteYouTubeEmbed id={src} title={'fdf'} />
    </Styles>
  )
}

export default SingleMovie
