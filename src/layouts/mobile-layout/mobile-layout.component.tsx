import MenuBar from '../../components/menu-bar/menu-bar-mobile.component'
import Carousel from '../../pages/carousel/carousel.component'
import MoviesView from '../../pages/movies-view/movies-view.component'

const MobileLayout = () => {
  return (
    <>
      <MenuBar />
      <Carousel />
      <MoviesView />
    </>
  )
}

export default MobileLayout
