import { useWindowSize } from './window-size.hook'

export const useDeviceDetect = () => {
  const { width } = useWindowSize()

  const device = width < 720 ? 'mobile' : width < 1200 ? 'tablet' : 'desktop'

  return {
    device,
    width
  }
}
