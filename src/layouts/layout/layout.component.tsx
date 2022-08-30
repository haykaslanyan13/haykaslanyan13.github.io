import { useIsMobile } from '../../hook/ui/is-mobile.hook'
import DesktopLayout from '../desktop-layout/desktop-layout.component'
import MobileLayout from '../mobile-layout/mobile-layout.component'

const Layout = () => {
  const isMobile = useIsMobile()

  return isMobile ? <MobileLayout /> : <DesktopLayout />
}

export default Layout
