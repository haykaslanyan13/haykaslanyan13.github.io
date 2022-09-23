import moment from 'moment'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import Styles from './decription.styles'

const optionsArray = [
  'title',
  'original-name',
  'year',
  'genre',
  'duration',
  'budget'
]

const MovieDescription = ({
  movie,
  mode
}: {
  movie: Record<string, any>
  mode: string
}) => {
  const { t } = useTranslation()
  const options = useMemo(() => {
    const correctOptions: Record<string, any> = {}
    correctOptions.title = movie.title
    correctOptions['original-name'] = movie.original_title
    correctOptions.year = moment(movie.release_date).format('YYYY')
    correctOptions.genre = movie.genres
      ?.map((genre: Record<string, any>) => genre.name)
      ?.join()
    correctOptions.duration = `${movie.runtime}m.`
    correctOptions.budget = `${movie.budget}$`

    return correctOptions
  }, [movie])

  return (
    <Styles mode={mode}>
      <div className="MovieDescription">
        {optionsArray.map((option, key) => {
          return (
            <div className="MovieDescription-item" key={key}>
              {t(`${option}`)}: <strong>{options[option]}</strong>
            </div>
          )
        })}
      </div>
    </Styles>
  )
}

export default MovieDescription
