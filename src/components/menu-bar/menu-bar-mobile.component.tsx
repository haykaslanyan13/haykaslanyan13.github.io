import { useState } from 'react'

import MenuIcon from '../animated-menu-icon/animated-menu-icon.component'
import Dropdown from '../dropdown/dropdown.component'
import SearchInput from '../search-input/search-input.component'
import Switch from '../switch/switch.component'
import Styles from './menu-bar-mobile.styles'

const MenuBar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState({
    key: '',
    label: ''
  })
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
    <Styles isOpen={isOpen}>
      <div className="Menu_Bar__container">
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
            <Switch />
            <span className="Menu_Bar__switch-label">Night mode</span>
          </div>
        </div>
      </div>
    </Styles>
  )
}

export default MenuBar
