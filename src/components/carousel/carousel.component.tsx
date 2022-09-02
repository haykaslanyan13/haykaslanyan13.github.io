import { useMemo } from 'react'
import { useSelector } from 'react-redux'

import { ArrowLeftIcon, ArrowRightIcon } from '../../assets/media/icons'
import { usePopulars } from '../../hook/api/populars.hook'
import { useDeviceDetect } from '../../hook/ui/device-detect'
import { RootState } from '../../store/store'
import Styles from './carousel.styles'

const Carousel = () => {
  const { populars } = usePopulars({
    language: 'en',
    page: 1
  })
  const { width } = useDeviceDetect()
  const { mode } = useSelector((state: RootState) => state.settings)

  const showMoviesCount = useMemo(() => {
    return width < 720 ? 2 : width < 1100 ? 5 : 8
  }, [width])

  return (
    <Styles $mode={mode}>
      <ArrowLeftIcon className="Carousel__arrow Carousel__arrow-left" />
      <ArrowRightIcon className="Carousel__arrow Carousel__arrow-right" />
      <div>
        {populars.results?.map((movie: Record<string, any>, index: number) => {
          return (
            <div
              className="Carousel__movie"
              key={index}
            >
              <img
                alt={''}
                src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
              />
            </div>
          )
        })}
      </div>
    </Styles>
  )
}

export default Carousel
