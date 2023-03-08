import { Fade } from 'hamburger-react'

interface MenuIconProps {
  toggled: boolean
  toggle: (value: any) => void
  direction?: 'right' | 'left'
  size?: number
  label?: string
  duration?: number
  color?: string
}



const MenuIcon = ({ toggle, toggled, direction, ...props }: MenuIconProps) => {
  return (
    <Fade toggled={toggled} toggle={toggle} direction={direction} {...props} />
  )
}

export default MenuIcon
