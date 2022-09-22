import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ArrowLeftIcon, ArrowRightIcon } from '../../assets/media/icons'
import { Routes } from '../../enums/routes.enum'
import { useDeviceDetect } from '../../hook/ui/device-detect.hook'
import { getRoute } from '../../utils/route'
import { scrollToTop } from '../../utils/scroll'
import Styles from './carousel.styles'

interface CarouselProps {
  mode?: 'light' | 'night'
  data: any[]
}

const Carousel = ({ data, mode = 'light' }: CarouselProps) => {
  const navigate = useNavigate()
  const { width, device } = useDeviceDetect()
  const [positionX, setPositionX] = useState(0)
  const [drag, setDrag] = useState(false)
  const innerRef = useRef<any>(null)
  const [maxScroll, setMaxScroll] = useState(0)
  const [clientX, setClientX] = useState(0)
  const [windowSize, setWindowSize] = useState(width)

  const navigateToView = (movie: Record<string, any>) => {
    navigate(
      getRoute(Routes.MOVIE, {
        id: movie.id
      }),
      {
        state: {
          id: movie.id
        }
      }
    )
    scrollToTop()
  }

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
        : setPositionX(positionX + width - (device == 'mobile' ? 10 : 25))
    } else {
      positionX - width + 10 < -maxScroll
        ? setPositionX(-maxScroll - 20)
        : setPositionX(positionX - width + (device == 'mobile' ? 10 : 25))
    }
  }

  useEffect(() => {
    if (innerRef.current) {
      setMaxScroll(innerRef.current.scrollWidth - innerRef.current.clientWidth)
    }
  }, [innerRef.current, windowSize, innerRef?.current?.scrollWidth])

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
            <div
              onClick={() => {
                navigateToView(movie)
              }}
              className="Carousel__movie"
              key={index}
            >
              <img
                alt={''}
                src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
              />
              <strong className="Carousel__movie-title">{movie.title}</strong>
            </div>
          )
        })}
      </div>
    </Styles>
  )
}

export default Carousel
