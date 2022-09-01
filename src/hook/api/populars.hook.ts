import useSWR from 'swr'

import { getPopulars } from '../../services/api/movies'
import { stringifyURL } from '../../utils/query'

interface UsePopulars {
  populars: any
  isLoading: boolean
}

interface IProps {
  language: string
  page?: number
}

export const usePopulars = ({ language, page = 1 }: IProps): UsePopulars => {
  const params = {
    language,
    page
  }

  const { data, error } = useSWR(
    stringifyURL('/movie/popular', params),
    getPopulars
  )
  console.log(data)
  const isLoading = !data && !error
  const populars = data || []

  return {
    isLoading,
    populars
  }
}
