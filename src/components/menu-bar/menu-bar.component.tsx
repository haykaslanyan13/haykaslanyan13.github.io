import LinearProgress from '@material/react-linear-progress'
import { useTranslation } from 'react-i18next'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import iFilmLogoNight from '../../assets/media/ifilm-dark-mode.png'
import iFilmLogoLight from '../../assets/media/ifilm-light-mode.png'
import { Routes } from '../../enums/routes.enum'
import { changeLanguage, changeMode } from '../../store/reducers/settingsSlice'
import { RootState } from '../../store/store'
import { scrollToTop } from '../../utils/scroll'
import Dropdown from '../dropdown/dropdown.component'
import SearchInput from '../search-input/search-input.component'
import Switch from '../switch/switch.component'
import Styles from './menu-bar.styles'
const MenuBar = () => {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { language, mode, isLoading } = useSelector(
    (state: RootState) => state.settings
  )

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

  const navigateToHome = () => {
    navigate(Routes.HOME)
    scrollToTop('smooth')
  }

  return (
    <Styles $mode={mode}>
      <div className="Menu_Bar__wrapper">
        <div className="Menu_Bar__content">
          {isLoading && (
            <LinearProgress
              buffer={1}
              progress={1}
              className="Menu_Bar__linear-progress"
            />
          )}
          <LazyLoadImage
            className="Menu_Bar__logo"
            src={mode == 'light' ? iFilmLogoLight : iFilmLogoNight}
            alt={''}
            onClick={navigateToHome}
          />
          <Dropdown
            className="Menu_Bar__dropdown"
            value={language}
            options={options}
            onSelect={(value: any) => {
              dispatch(changeLanguage(value))
              i18n.changeLanguage(value.key)
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
          <span className="Menu_Bar__switch-label">{t('night-mode')}</span>
        </div>
      </div>
    </Styles>
  )
}

export default MenuBar
