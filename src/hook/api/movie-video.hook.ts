import useSWR from 'swr'

import { getData } from '../../services/api/movies'
import { stringifyURL } from '../../utils/query'

interface UseVideo {
  video: Record<string, any>
  isLoading: boolean
}

interface IProps {
  movieId: number
  language: string
}

export const useVideo = ({ language, movieId }: IProps): UseVideo => {
  const params = {
    language
  }

  const { data, error } = useSWR(
    stringifyURL(`/movie/${movieId}/videos`, params),
    getData
  )

  const video = data || {}
  const isLoading = !video && !error

  return {
    video,
    isLoading
  }
}
