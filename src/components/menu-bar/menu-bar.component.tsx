import { useDispatch, useSelector } from 'react-redux'

import { changeLanguage, changeMode } from '../../store/reducers/settingsSlice'
import { RootState } from '../../store/store'
import Dropdown from '../dropdown/dropdown.component'
import SearchInput from '../search-input/search-input.component'
import Switch from '../switch/switch.component'
import Styles from './menu-bar.styles'

const MenuBar = () => {
  const dispatch = useDispatch()
  // const language = useSelector((state: RootState) => state.settings.language)
  const state = useSelector((state: RootState) => state.settings)
  console.log(state)
  const { language, mode } = state
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
    <Styles>
      <div className="Menu_Bar__content">
        <img
          className="Menu_Bar__logo"
          src={require('../../assets/media/ifilm-light-mode.png')}
          alt={''}
        />
        <Dropdown
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
    </Styles>
  )
}

export default MenuBar
