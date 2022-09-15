import moment from 'moment'
import { useMemo } from 'react'

import Styles from './decription.styles'

const options = {
  Title: 'title',
  'Original name': 'original_title',
  Year: 'release_date',
  Genre: 'genre',
  Duration: 'dur',
  Budget: 'budget'
}

const MovieDescription = ({ movie }: { movie: Record<string, any> }) => {
  console.log(movie, 'movie')

  const correctOption = useMemo(() => {
    const correctOptions: Record<string, any> = {}
    correctOptions.Title = movie.title
    correctOptions.Year = moment(movie.release_date).format('YYYY')
    // correctOptions.Genre = movie.genres.map((genre: Record<string, any>) => )

    return correctOptions
  }, [])
  return (
    <Styles>
      {Object.keys(options).map((option, key) => {
        return <div key={key}>dfdfd</div>
      })}
    </Styles>
  )
}

export default MovieDescription
