import React from 'react'

import MenuBar from '../../components/menu-bar/menu-bar-mobile.component'
import Carousel from '../../pages/carousel/carousel.component'

const MobileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MenuBar />
      <Carousel />
      {children}
    </>
  )
}

export default MobileLayout
