import React from 'react'

import { useIsMobile } from '../../hook/ui/is-mobile.hook'
import Cinema from '../cinema/cinema.component'
import SingleMovie from '../movie/single-movie.component'
import TopMovies from '../top-movies/top-movies.component'
import Styles from './single-movie-view.styles'

const SingleMovieView = () => {
  const isMobile = useIsMobile()
  return (
    <Styles isMobile={isMobile}>
      <SingleMovie />
      <div className="TopMovies__container">
        <TopMovies />
        <Cinema />
      </div>
    </Styles>
  )
}

export default SingleMovieView
