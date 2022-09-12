import MenuBar from '../../components/menu-bar/menu-bar-mobile.component'
import Carousel from '../../pages/Carousel/carousel.component'
import MoviesView from '../../pages/movies/movies.compoonent'

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
