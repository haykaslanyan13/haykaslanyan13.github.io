import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ArrowLeftIcon, ArrowRightIcon } from '../../assets/media/icons'
import { Routes } from '../../enums/routes.enum'
import usePrevious from '../../hook/previous.hook'
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
  const [maxScroll, setMaxScroll] = useState(0)
  const [clientX, setClientX] = useState(0)
  const [windowSize, setWindowSize] = useState(width)
  const innerRef = useRef<any>(null)
  const prevWidth = usePrevious(width)

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
    scrollToTop('auto')
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
    positionX != 0 && prevWidth && setPositionX(positionX + (prevWidth - width))
  }, [width])

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
          if (device != 'mobile') {
            e.preventDefault()
            setDrag(true)
          }
        }}
        onMouseUp={(event) => {
          if (device != 'mobile') {
            event.movementX == 0 && setDrag(false)
          }
        }}
        onMouseMove={(e) => {
          if (device != 'mobile' && drag) {
            e.preventDefault()
            handleClick(e.movementX > 0 ? 'left' : 'right')
            setDrag(false)
          }
        }}
        onTouchStart={(e) => {
          setDrag(true)
          setClientX(e.touches[0].clientX)
        }}
        onTouchMove={(event) => {
          drag &&
            event.changedTouches[0].clientX != clientX &&
            handleClick(
              event.changedTouches[0].clientX > clientX ? 'left' : 'right'
            )
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
