import useSWR from 'swr'

import { getData } from '../../services/api/movies'
import { stringifyURL } from '../../utils/query'

interface UsePopulars {
  movie: any
  isLoading: boolean
}

interface IProps {
  language: string
  id: number
}

export const useMovie = ({ language, id }: IProps): UsePopulars => {
  const params = {
    language
  }

  const { data, error } = useSWR(stringifyURL(`/movie/${id}`, params), getData)

  const isLoading = !data && !error
  const movie = data || {}

  return {
    isLoading,
    movie
  }
}
