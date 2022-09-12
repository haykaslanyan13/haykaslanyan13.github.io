import Movies from '../movies/movies.compoonent'
import TopMovies from '../top-movies/top-movies.component'
import Styles from './movies-view.styles'

const MoviesView = () => {
  return (
    <Styles>
      <Movies />
      <div className="TopMovies__container">
        <TopMovies />
      </div>
    </Styles>
  )
}

export default MoviesView
