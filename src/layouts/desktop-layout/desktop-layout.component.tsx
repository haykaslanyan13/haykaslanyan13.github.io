import React from 'react'

import MenuBar from '../../components/menu-bar/menu-bar.component'
import Carousel from '../../pages/carousel/carousel.component'

const DesktopLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MenuBar />
      <Carousel />
      {children}
    </>
  )
}

export default DesktopLayout
