import { Button, Input } from 'antd'

import { SearchIcon } from '../../assets/media/icons'
import Styles from './search-input.styles'

interface SearchInputProps {
  className?: any
}

const SearchInput = ({ className }: SearchInputProps) => {
  return (
    <Styles className={className}>
      <Input
        className="Search-input__input"
        prefix={<SearchIcon className="Search-input__icon" />}
        suffix={
          <>
            <div className="divider" />
            <Button className="Search-input__button-text" type="text">
              Search
            </Button>
          </>
        }
      />
    </Styles>
  )
}

export default SearchInput
