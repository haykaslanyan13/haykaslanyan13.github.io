import 'antd/dist/antd.min.css'

import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from './layouts/layout/layout.component'

function App() {
  return (
    <div>
      <Helmet>
        <style>{'body { background-color: #000000; margin: 0;}'}</style>
      </Helmet>
      <Layout />
    </div>
  )
}

export default App
