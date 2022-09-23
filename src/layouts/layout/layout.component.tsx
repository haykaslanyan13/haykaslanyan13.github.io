import React from 'react'
import styled from 'styled-components'

import { useIsMobile } from '../../hook/ui/is-mobile.hook'
import DesktopLayout from '../desktop-layout/desktop-layout.component'
import Footer from '../footer/footer.component'
import MobileLayout from '../mobile-layout/mobile-layout.component'

const Styles = styled.div`
  position: relative;
`

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useIsMobile()
  return (
    <Styles>
      {isMobile ? (
        <MobileLayout>{children}</MobileLayout>
      ) : (
        <DesktopLayout>{children}</DesktopLayout>
      )}
      <Footer />
    </Styles>
  )
}

export default Layout
