import { Button, Input } from 'antd'

import { SearchIcon } from '../../assets/media/icons'
import Styles from './search-input.styles'

const SearchInput = () => {
  return (
    <Styles>
      <Input
        className="Search-input__input"
        prefix={<SearchIcon className="Search-input__icon" />}
        suffix={
          <>
            <div
              style={{
                borderLeft: '1px solid #ffa502',
                height: 25
              }}
            />
            <Button
              style={{
                color: '#b3b3b3',
                padding: 0
              }}
              type="text"
            >
              Search
            </Button>
          </>
        }
      />
    </Styles>
  )
}

export default SearchInput
