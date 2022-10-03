import { ImgHTMLAttributes, useMemo, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { RotatingLines } from 'react-loader-spinner'

import Styles from './image.styles'

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  imageClassName: string
  loaderClassName?: string
  loaderWidth?: string
  loaderStrokeWidth?: string
  lazyLoad?: boolean
}

const Image = ({
  src,
  imageClassName,
  loaderClassName,
  loaderWidth,
  loaderStrokeWidth,
  lazyLoad,
  onClick
}: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true)

  const currentSrc = useMemo(() => {
    return src?.lastIndexOf('/') == 0
      ? `${process.env.REACT_APP_IMAGE_BASE_URL}${src}`
      : src
  }, [src])

  return (
    <Styles
      onClick={onClick}
      loaderClassName={loaderClassName}
      isLoading={isLoading}
    >
      {lazyLoad ? (
        <LazyLoadImage
          afterLoad={() => {
            setIsLoading(false)
          }}
          alt=""
          src={currentSrc}
          className={`Image ${imageClassName}`}
        />
      ) : (
        <img
          onLoad={() => {
            setIsLoading(false)
          }}
          alt=""
          src={currentSrc}
          className={`Image ${imageClassName}`}
        />
      )}
      <div className={`Image-loading ${loaderClassName}`}>
        <RotatingLines
          strokeWidth={loaderStrokeWidth}
          width={loaderWidth}
          strokeColor={'#fe7900'}
          visible={isLoading}
        />
      </div>
    </Styles>
  )
}

export default Image
