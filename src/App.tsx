import 'antd/dist/antd.min.css'

import React from 'react'
import { useSelector } from 'react-redux'
import { SWRConfig } from 'swr'

import { GlobalStyles } from './global.styles'
import Layout from './layouts/layout/layout.component'
import { RootState } from './store/store'

function App() {
  const { mode } = useSelector((state: RootState) => state.settings)

  return (
    <>
      <SWRConfig
        value={{
          revalidateOnFocus: false,
          revalidateOnReconnect: true
        }}
      >
        <GlobalStyles mode={mode} />
        <Layout />
      </SWRConfig>
    </>
  )
}

export default App
