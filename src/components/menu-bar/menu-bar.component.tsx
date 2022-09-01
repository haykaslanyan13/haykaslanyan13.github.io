import { useDispatch, useSelector } from 'react-redux'

import iFilmLogoNight from '../../assets/media/ifilm-dark-mode.png'
import iFilmLogoLight from '../../assets/media/ifilm-light-mode.png'
import { changeLanguage, changeMode } from '../../store/reducers/settingsSlice'
import { RootState } from '../../store/store'
import Dropdown from '../dropdown/dropdown.component'
import SearchInput from '../search-input/search-input.component'
import Switch from '../switch/switch.component'
import Styles from './menu-bar.styles'

const MenuBar = () => {
  const dispatch = useDispatch()
  const { language, mode } = useSelector((state: RootState) => state.settings)

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
    <Styles $mode={mode}>
      <div className="Menu_Bar__wrapper">
        <div className="Menu_Bar__content">
          <img
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
          <SearchInput className="Menu_Bar__input" />
        </div>
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
    </Styles>
  )
}

export default MenuBar
