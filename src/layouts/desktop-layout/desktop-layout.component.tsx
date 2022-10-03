import React from 'react'

import MenuBar from '../../components/menu-bar/menu-bar.component'
import MenuBarMobile from '../../components/menu-bar/menu-bar-mobile.component'
import { useDeviceDetect } from '../../hook/ui/device-detect.hook'
import Carousel from '../../pages/carousel/carousel.component'

const DesktopLayout = ({ children }: { children: React.ReactNode }) => {
  const { width } = useDeviceDetect()

  return (
    <>
      {width > 1000 ? <MenuBar /> : <MenuBarMobile />}
      <Carousel />
      {children}
    </>
  )
}

export default DesktopLayout
