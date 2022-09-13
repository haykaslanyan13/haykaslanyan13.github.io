import { useIsMobile } from '../../hook/ui/is-mobile.hook'
import Cinema from '../cinema/cinema.component'
import Movies from '../movies/movies.compoonent'
import TopMovies from '../top-movies/top-movies.component'
import Styles from './movies-view.styles'
const MoviesView = () => {
  const isMobile = useIsMobile()
  return (
    <Styles isMobile={isMobile}>
      <Movies />
      <div className="TopMovies__container">
        <TopMovies />
        <Cinema />
      </div>
    </Styles>
  )
}

export default MoviesView
