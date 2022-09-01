import { api } from '../../managers/api.manager'

export const getPopulars = async (url: string) => {
  const response = await api.get(url)
  return response.data
}
