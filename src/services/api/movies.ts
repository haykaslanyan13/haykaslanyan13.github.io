import { api } from '../../managers/api.manager'

export const getData = async (url: string) => {
  const response = await api.get(url)
  return response.data
}
