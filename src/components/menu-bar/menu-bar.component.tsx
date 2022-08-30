import { useState } from 'react'

import { SearchIcon } from '../../assets/media/icons'
import Dropdown from '../dropdown/dropdown.component'
import SearchInput from '../search-input/search-input.component'
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
      <img
        className="Menu_Bar__logo"
        src={require('../../assets/media/ifilm-light-mode.png')}
        alt={''}
      />
      <SearchInput />
      <Dropdown
        value={selectedLanguage}
        options={options}
        onSelect={setSelectedLanguage}
      />
    </Styles>
  )
}

export default MenuBar
