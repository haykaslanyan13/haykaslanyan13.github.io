import { useEffect, useRef, useState } from 'react'

import { ArrowLeftIcon, ArrowRightIcon } from '../../assets/media/icons'
import { useDeviceDetect } from '../../hook/ui/device-detect.hook'
import Styles from './carousel.styles'

interface CarouselProps {
  mode?: 'light' | 'night'
  data: any[]
}

const Carousel = ({ data, mode = 'light' }: CarouselProps) => {
  const { width } = useDeviceDetect()
  const [positionX, setPositionX] = useState(0)
  const [drag, setDrag] = useState(false)
  const innerRef = useRef<any>(null)
  const [maxScroll, setMaxScroll] = useState(0)
  const [clientX, setClientX] = useState(0)
  const [windowSize, setWindowSize] = useState(width)

  useEffect(() => {
    if (positionX != 0) {
      setPositionX(positionX - Math.abs(width - windowSize))
      setWindowSize(width)
    } else {
      setWindowSize(width)
    }
  }, [width])

  const handleClick = (direction: string) => {
    if (direction == 'left') {
      positionX + width - 10 > 0
        ? setPositionX(0)
        : setPositionX(positionX + width - 10)
    } else {
      positionX - width + 10 < -maxScroll
        ? setPositionX(-maxScroll - 20)
        : setPositionX(positionX - width + 10)
    }
  }

  useEffect(() => {
    if (innerRef.current) {
      setMaxScroll(innerRef.current.scrollWidth - innerRef.current.clientWidth)
    }
  }, [innerRef.current, windowSize])

  return (
    <Styles maxScroll={maxScroll} positionX={positionX} $mode={mode}>
      <ArrowLeftIcon
        onClick={() => handleClick('left')}
        className="Carousel__arrow Carousel__arrow-left"
      />
      <ArrowRightIcon
        onClick={() => handleClick('right')}
        className="Carousel__arrow Carousel__arrow-right"
      />
      <div
        ref={innerRef}
        onMouseDown={(e) => {
          e.preventDefault()
          setDrag(true)
        }}
        onTouchStart={(e) => {
          setDrag(true)
          setClientX(e.touches[0].clientX)
        }}
        onTouchEnd={(e) => {
          drag &&
            handleClick(
              e.changedTouches[0].clientX > clientX ? 'left' : 'right'
            )
          setDrag(false)
        }}
        onMouseMove={(e) => {
          e.preventDefault()
          drag && handleClick(e.movementX > 0 ? 'left' : 'right')
          setDrag(false)
        }}
      >
        {data?.map((movie: Record<string, any>, index: number) => {
          return (
            <div className="Carousel__movie" key={index}>
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
