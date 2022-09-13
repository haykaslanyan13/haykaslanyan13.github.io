import { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useDispatch, useSelector } from 'react-redux'

import iFilmLogoNight from '../../assets/media/ifilm-dark-mode.png'
import iFilmLogoLight from '../../assets/media/ifilm-light-mode.png'
import { changeLanguage, changeMode } from '../../store/reducers/settingsSlice'
import { RootState } from '../../store/store'
import MenuIcon from '../animated-menu-icon/animated-menu-icon.component'
import Dropdown from '../dropdown/dropdown.component'
import SearchInput from '../search-input/search-input.component'
import Switch from '../switch/switch.component'
import Styles from './menu-bar-mobile.styles'

const MenuBar = () => {
  const dispatch = useDispatch()
  const { language, mode } = useSelector((state: RootState) => state.settings)
  const [isOpen, setIsOpen] = useState(false)
  const options = [
    {
      key: 'en',
      label: 'EN'
    },
    {
      key: 'ru',
      label: 'RU'
    }
  ]

  return (
    <Styles $mode={mode} isOpen={isOpen}>
      <div className="Menu_Bar__wrapper">
        <div className="Menu_Bar__container">
          <div className="Menu_Bar__content">
            <LazyLoadImage
              className="Menu_Bar__logo"
              src={mode == 'light' ? iFilmLogoLight : iFilmLogoNight}
              alt={''}
            />
            <Dropdown
              className="Menu_Bar__dropdown"
              value={language}
              options={options}
              onSelect={(value: any) => {
                dispatch(changeLanguage(value))
              }}
            />
            <MenuIcon
              direction={'right'}
              toggled={isOpen}
              toggle={setIsOpen}
              size={35}
              color={'#fe7900'}
            />
          </div>
          <div className="Menu_Bar__search-content">
            <SearchInput className="Menu_Bar__input" />
            <div className="Menu_Bar__switch-container">
              <Switch
                checked={mode === 'night'}
                onChange={(checked: boolean) => {
                  dispatch(changeMode(checked ? 'night' : 'light'))
                }}
              />
              <span className="Menu_Bar__switch-label">Night mode</span>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  )
}

export default MenuBar
