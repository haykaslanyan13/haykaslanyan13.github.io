import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
})

api.interceptors.request.use(function (config) {
  config.url = config.url + `&api_key=${process.env.REACT_APP_API_KEY}`
  return config
})
