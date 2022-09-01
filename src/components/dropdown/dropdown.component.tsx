import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Menu, Space } from 'antd'
import React, { useState } from 'react'

import { DropdownOptionType } from '../../types/dropdown-option.type'
import Styles from './dropdown.styles'

interface DropdownProps {
  options: Array<DropdownOptionType>
  value?: DropdownOptionType
  onSelect?: (value: any) => void
  className?: string
}

const DropdownComponent = ({
  options,
  value,
  onSelect,
  className
}: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState<any>(value || {})

  return (
    <Styles className={className}>
      <Dropdown
        trigger={['click']}
        overlay={
          <>
            <Menu
              selectable
              defaultSelectedKeys={
                selectedOption?.key ? [selectedOption.key] : []
              }
              onClick={(menuInfo: any) => {
                const currentOption = options.find(
                  (o: any) => o.key == menuInfo.key
                )
                setSelectedOption(currentOption)
                onSelect && onSelect(currentOption)
              }}
              items={options}
            />
          </>
        }
      >
        <Space>
          {selectedOption?.label || 'Select'}
          <DownOutlined />
        </Space>
      </Dropdown>
    </Styles>
  )
}

export default DropdownComponent
