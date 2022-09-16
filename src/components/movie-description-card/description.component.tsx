import moment from 'moment'
import { useMemo } from 'react'

import Styles from './decription.styles'

const optionsArray = [
  'Title',
  'Original name',
  'Year',
  'Genre',
  'Duration',
  'Budget'
]

const MovieDescription = ({
  movie,
  mode
}: {
  movie: Record<string, any>
  mode: string
}) => {
  const options = useMemo(() => {
    const correctOptions: Record<string, any> = {}
    correctOptions.Title = movie.title
    correctOptions['Original name'] = movie.original_title
    correctOptions.Year = moment(movie.release_date).format('YYYY')
    correctOptions.Genre = movie.genres
      ?.map((genre: Record<string, any>) => genre.name)
      ?.join()
    correctOptions.Duration = `${movie.runtime}m.`
    correctOptions.Budget = `${movie.budget}$`

    return correctOptions
  }, [movie])

  return (
    <Styles mode={mode}>
      <div className="MovieDescription">
        {optionsArray.map((option, key) => {
          return (
            <div className="MovieDescription-item" key={key}>
              {option}: <strong>{options[option]}</strong>
            </div>
          )
        })}
      </div>
    </Styles>
  )
}

export default MovieDescription
