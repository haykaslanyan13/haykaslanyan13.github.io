import { useState } from 'react'

import Dropdown from '../dropdown/dropdown.component'
import SearchInput from '../search-input/search-input.component'
import Switch from '../switch/switch.component'
import Styles from './menu-bar.styles'
const MenuBar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState({
    key: '',
    label: ''
  })
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
          value={selectedLanguage}
          options={options}
          onSelect={setSelectedLanguage}
        />
        <SearchInput className="Menu_Bar__input" />
      </div>
      <div className="Menu_Bar__switch-container">
        <Switch />
        <span className="Menu_Bar__switch-label">Night mode</span>
      </div>
    </Styles>
  )
}

export default MenuBar
