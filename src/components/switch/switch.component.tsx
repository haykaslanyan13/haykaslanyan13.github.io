import { Switch } from 'antd'
import { useState } from 'react'

import Styles from './switch.styles'

interface SwitchComponentProps {
  checked?: boolean
  onChange?: (value: boolean) => void
}

const SwitchComponent = ({ checked, onChange }: SwitchComponentProps) => {
  const [value, setValue] = useState(checked || false)
  return (
    <Styles>
      <Switch
        checked={value}
        onChange={(e) => {
          setValue(e)
          onChange && onChange(e)
        }}
      />
    </Styles>
  )
}

export default SwitchComponent
