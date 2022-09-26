import { lazy } from 'react'

import { Routes } from '../enums/routes.enum'
import { RouteType } from '../types/route.type'

export const routes: RouteType[] = [
  {
    url: Routes.HOME,
    Component: lazy(() => import('../pages/movies-view/movies-view.component'))
  },
  {
    url: Routes.MOVIE,
    Component: lazy(
      () => import('../pages/single-movie-view/single-movie-view.component')
    )
  },
  {
    url: Routes.SEARCH,
    Component: lazy(
      () => import('../pages/search-movie/search-movie-component')
    )
  }
]
