import React, { lazy } from 'react'

import { Routes } from '../enums/routes.enum'

export const routes: { url: string; Component: React.ComponentType }[] = [
  {
    url: Routes.HOME,
    Component: lazy(() => import('../pages/movies/movies.component'))
  },
  {
    url: Routes.MOVIE,
    Component: lazy(() => import('../pages/movie/single-movie-view.component'))
  }
]
