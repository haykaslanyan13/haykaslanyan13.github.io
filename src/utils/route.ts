import { compile } from 'path-to-regexp'

export const getRoute = (url: string, params: Record<string, any>): string => {
  return compile(url, { encode: encodeURIComponent })(params)
}
