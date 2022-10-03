import { Button, Input } from 'antd'
import { InputHTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'

import { SearchIcon } from '../../assets/media/icons'
import Styles from './search-input.styles'

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onButtonClick?: (event: any) => void
}

const SearchInput = ({
  className,
  value,
  onChange,
  onKeyPress,
  onButtonClick
}: SearchInputProps) => {
  const { t } = useTranslation()

  return (
    <Styles className={className}>
      <Input
        className="Search-input__input"
        prefix={<SearchIcon className="Search-input__icon" />}
        onChange={onChange}
        value={value}
        onKeyPress={onKeyPress}
        suffix={
          <>
            <div className="divider" />
            <Button
              onClick={onButtonClick}
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
