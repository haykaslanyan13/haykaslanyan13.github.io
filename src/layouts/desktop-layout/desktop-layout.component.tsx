import MenuBar from '../../components/menu-bar/menu-bar.component'
import Carousel from '../../pages/Carousel/carousel.component'
import MoviesView from '../../pages/movies-view/movies-view.compoonent'

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
