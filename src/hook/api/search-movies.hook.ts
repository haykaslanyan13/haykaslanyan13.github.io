import useSWR from 'swr'

import { getMovies } from '../../services/api/movies'
import { stringifyURL } from '../../utils/query'

interface IProps {
  query: string
  language: string
  page: number
}

interface UseSearchMovies {
  movies: Record<string, any>
  isLoading: boolean
}

export const useSearchMovies = ({
  language,
  page,
  query
}: IProps): UseSearchMovies => {
  const params = {
    query,
    language,
    page,
    include_adult: true
  }

  const { data, error } = useSWR(
    stringifyURL('/search/movie', params),
    getMovies
  )

  const movies = data || {}
  const isLoading = !data && !error

  return {
    movies,
    isLoading
  }
}
