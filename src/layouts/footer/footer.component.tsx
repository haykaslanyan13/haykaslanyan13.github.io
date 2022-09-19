import { useMemo } from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import { useSelector } from 'react-redux'

import { useVideo } from '../../hook/api/movie-video.hook'
import { usePopulars } from '../../hook/api/populars.hook'
import { RootState } from '../../store/store'
import Styles from './footer.styles'
const Footer = () => {
  const {
    language: { key: language }
  } = useSelector((state: RootState) => state.settings)
  const { populars } = usePopulars({
    language
  })
  const { video } = useVideo({
    language,
    movieId: populars?.results?.[0]?.id
  })

  const currentMovie = useMemo(() => {
    return populars.results?.[0]
  }, [populars])

  const src = useMemo(() => {
    return video?.results?.[0]?.key
  }, [video])

  return (
    <Styles src={currentMovie?.poster_path}>
      <div className="Layout__footer">
        <div className="Layout__footer-video">
          <LiteYouTubeEmbed id={src} title={''} />
        </div>
        <span className="Layout__footer-text">
          Copyright © 2019 iFilm.com. All Rights Reserved.
        </span>
      </div>
    </Styles>
  )
}

export default Footer
