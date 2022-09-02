import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import { mediaQueries, screenSizes } from '../../enums/screen-sizes.enum'
import { useEvent } from './event.hook'
import { useWindowSize } from './window-size.hook'

export const useDeviceDetect = () => {
  const { width } = useWindowSize()
  // const [printMode, setPrintMode] = useState(false)
  const isLandscape = useMediaQuery({ query: mediaQueries.LANDSCAPE })
  //
  // useEvent('beforeprint', () => setPrintMode(true))
  // useEvent('afterprint', () => setPrintMode(false))
  return {
    width
  }
  // return !printMode && (width < screenSizes.TABLET || isLandscape)
}
