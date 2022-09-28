import { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { RotatingLines } from 'react-loader-spinner'

import Styles from './image.styles'

interface ImageProps {
  src: string
  imageClassName: string
  loaderClassName?: string
  loaderWidth: string
  loaderStrokeWidth: string
}

const Image = ({
  src,
  imageClassName,
  loaderClassName,
  loaderWidth,
  loaderStrokeWidth
}: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true)
  return (
    <Styles loaderClassName={loaderClassName} isLoading={isLoading}>
      <LazyLoadImage
        afterLoad={() => {
          setIsLoading(false)
        }}
        alt=""
        src={`${process.env.REACT_APP_IMAGE_BASE_URL}${src}`}
        className={`Image ${imageClassName}`}
      />
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
