import useSWR from 'swr'

import { getData } from '../../services/api/movies'
import { stringifyURL } from '../../utils/query'

interface UseTopMovies {
  topMovies: Record<string, any>
  isLoading: boolean
}

interface IProps {
  language: string
  page: number | string
}

export const useTopMovies = ({ language, page }: IProps): UseTopMovies => {
  const params = {
    language,
    page
  }

  const { data, error } = useSWR(
    stringifyURL('/movie/top_rated', params),
    getData
  )

  const topMovies = data || {}
  const isLoading = !data && !error

  return {
    topMovies,
    isLoading
  }
}
