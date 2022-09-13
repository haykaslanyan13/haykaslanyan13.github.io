import MenuBar from '../../components/menu-bar/menu-bar.component'
import Carousel from '../../pages/carousel/carousel.component'
import MoviesView from '../../pages/movies-view/movies-view.component'

const DesktopLayout = () => {
  return (
    <>
      <MenuBar />
      <Carousel />
      <MoviesView />
    </>
  )
}

export default DesktopLayout
