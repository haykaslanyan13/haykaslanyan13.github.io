import { useSelector } from 'react-redux'

import CarouselComponent from '../../components/carousel/carousel.component'
import { usePopulars } from '../../hook/api/populars.hook'
import { RootState } from '../../store/store'

const Carousel = () => {
  const { mode, language } = useSelector((state: RootState) => state.settings)
  const { populars } = usePopulars({
    language: language.key,
    page: 1
  })
  return (
    <>
      <CarouselComponent data={populars.results} mode={mode} />
    </>
  )
}

export default Carousel
