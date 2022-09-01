import 'antd/dist/antd.min.css'

import React from 'react'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'

import Layout from './layouts/layout/layout.component'
import { RootState } from './store/store'

function App() {
  const { mode } = useSelector((state: RootState) => state.settings)
  return (
    <div>
      {/*<Helmet>*/}
      {/*  <style>{`body { background-color: ${*/}
      {/*    mode == 'light' ? '#fff' : 'black'*/}
      {/*  }; margin-top: 80px;}`}</style>*/}
      {/*</Helmet>*/}
      <Helmet>
        <style>{`body { background-color: ${
          mode == 'light' ? '#fff' : 'black'
        }; margin: 0; transition: background-color 0.4s cubic-bezier(0.41, -0.21, 0.41, 1.1);}`}</style>
      </Helmet>
      <Layout />
    </div>
  )
}

export default App
