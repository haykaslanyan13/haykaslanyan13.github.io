import { Button, Input } from 'antd'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { SearchIcon } from '../../assets/media/icons'
import { Routes } from '../../enums/routes.enum'
import { getRoute } from '../../utils/route'
import Styles from './search-input.styles'

interface SearchInputProps {
  className?: any
}

const SearchInput = ({ className }: SearchInputProps) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [searchText, setSearchText] = useState('')

  const navigateTo = () => {
    navigate(
      getRoute(Routes.SEARCH, {
        keyword: `keyword=${searchText}`
      }),
      {
        state: {
          searchText
        }
      }
    )
  }
  return (
    <Styles className={className}>
      <Input
        className="Search-input__input"
        prefix={<SearchIcon className="Search-input__icon" />}
        onChange={(event) => {
          setSearchText(event.target.value)
        }}
        onKeyPress={(event) => {
          if (event.key == 'Enter' && searchText) {
            navigateTo()
          }
        }}
        suffix={
          <>
            <div className="divider" />
            <Button
              onClick={() => {
                searchText && navigateTo()
              }}
              className="Search-input__button-text"
              type="text"
            >
              {t('search')}
            </Button>
          </>
        }
      />
    </Styles>
  )
}

export default SearchInput
