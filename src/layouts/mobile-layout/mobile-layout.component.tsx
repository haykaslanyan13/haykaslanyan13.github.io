import React from 'react'

import MenuBar from '../../components/menu-bar/menu-bar-mobile.component'
import Carousel from '../../pages/carousel/carousel.component'
import MoviesView from '../../pages/movies-view/movies-view.component'

const MobileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MenuBar />
      <Carousel />
      <MoviesView>{children}</MoviesView>
    </>
  )
}

export default MobileLayout
