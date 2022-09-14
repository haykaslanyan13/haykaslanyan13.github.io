import React from 'react'

import { useIsMobile } from '../../hook/ui/is-mobile.hook'
import Cinema from '../cinema/cinema.component'
import TopMovies from '../top-movies/top-movies.component'
import Styles from './movies-view.styles'

const MoviesView = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useIsMobile()
  return (
    <Styles isMobile={isMobile}>
      {children}
      <div className="TopMovies__container">
        <TopMovies />
        <Cinema />
      </div>
    </Styles>
  )
}

export default MoviesView
