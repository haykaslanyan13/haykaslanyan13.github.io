import 'antd/dist/antd.min.css'
import '@material/react-linear-progress/dist/linear-progress.css'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

import { Skeleton } from 'antd'
import React from 'react'
import { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'

import { routes } from './config/routes.config'
import { GlobalStyles } from './global.styles'
import Layout from './layouts/layout/layout.component'
import { RootState } from './store/store'

const Styles = styled.div`
  .suspense {
    margin-left: 20vw;
    width: 60vw;
    height: 100%;
    margin-top: 90px;
  }
`

function App() {
  const { mode } = useSelector((state: RootState) => state.settings)

  return (
    <Styles>
      <GlobalStyles mode={mode} />
      <Layout>
        <Suspense
          fallback={
            <Skeleton active paragraph={{ rows: 20 }} className="suspense" />
          }
        >
          <Routes>
            {routes.map((R: any, key: number) => (
              <Route path={R.url} element={<R.Component />} key={R.url + key} />
            ))}
          </Routes>
        </Suspense>
      </Layout>
    </Styles>
  )
}

export default App
