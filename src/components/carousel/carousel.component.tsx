import { useSelector } from 'react-redux'

import { ArrowLeftIcon, ArrowRightIcon } from '../../assets/media/icons'
import { usePopulars } from '../../hook/api/populars.hook'
import { RootState } from '../../store/store'
import Styles from './carousel.styles'

const Carousel = () => {
  const { populars } = usePopulars({
    language: 'en',
    page: 1
  })
  const { mode } = useSelector((state: RootState) => state.settings)
  return (
    <Styles $mode={mode}>
      <ArrowLeftIcon className="Carousel__arrow Carousel__arrow-left" />
      <ArrowRightIcon className="Carousel__arrow Carousel__arrow-right" />
    </Styles>
  )
}

export default Carousel
