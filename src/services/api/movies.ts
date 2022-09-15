import { api } from '../../managers/api.manager'

export const getPopulars = async (url: string) => {
  const response = await api.get(url)
  return response.data
}

export const getTopMovies = async (url: string) => {
  const response = await api.get(url)
  return response.data
}

export const getMovies = async (url: string) => {
  const response = await api.get(url)
  return response.data
}

export const getMovie = async (url: string) => {
  const response = await api.get(url)
  return response.data
}
