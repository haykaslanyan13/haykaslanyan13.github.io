import { useDispatch } from 'react-redux'
import useSWR from 'swr'

import { getTopMovies } from '../../services/api/movies'
import { changeLoadProcess } from '../../store/reducers/settingsSlice'
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
  const dispatch = useDispatch()
  const params = {
    language,
    page
  }

  const { data, error } = useSWR(
    stringifyURL('/movie/top_rated', params),
    getTopMovies
  )

  const topMovies = data || {}
  const isLoading = !data && !error
  dispatch(changeLoadProcess(isLoading))

  return {
    topMovies,
    isLoading
  }
}
