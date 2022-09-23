import React, { lazy } from 'react'

import { Routes } from '../enums/routes.enum'

export const routes: { url: string; Component: React.ComponentType }[] = [
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
