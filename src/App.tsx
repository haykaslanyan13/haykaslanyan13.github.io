import 'antd/dist/antd.min.css'

import React from 'react'
import { useSelector } from 'react-redux'

import { GlobalStyles } from './global.styles'
import Layout from './layouts/layout/layout.component'
import { RootState } from './store/store'

function App() {
  const { mode } = useSelector((state: RootState) => state.settings)

  return (
    <div>
      <GlobalStyles mode={mode} />
      <Layout />
    </div>
  )
}

export default App
