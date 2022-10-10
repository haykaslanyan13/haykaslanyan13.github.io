import useSWR from 'swr'

import { getData } from '../../services/api/movies'
import { stringifyURL } from '../../utils/query'

interface UseNowPlaying {
  nowPlayingMovies: Record<string, any>
  isLoading: boolean
}

interface IProps {
  language: string
  page?: number
}

export const useNowPlaying = ({
  language,
  page = 1
}: IProps): UseNowPlaying => {
  const params = {
    language,
    page
  }

  const { data, error } = useSWR(
    stringifyURL('/movie/now_playing', params),
    getData
  )

  const nowPlayingMovies = data || {}
  const isLoading = !nowPlayingMovies && !error

  return {
    nowPlayingMovies,
    isLoading
  }
}
