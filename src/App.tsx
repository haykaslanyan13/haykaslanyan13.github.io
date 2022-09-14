import 'antd/dist/antd.min.css'

import { Skeleton } from 'antd'
import React, { useMemo } from 'react'
import { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import { routes } from './config/routes.config'
import { GlobalStyles } from './global.styles'
import Layout from './layouts/layout/layout.component'
import { RootState } from './store/store'
function App() {
  const { mode } = useSelector((state: RootState) => state.settings)

  const fallback = useMemo(() => {
    return (
      // <Skeleton
      //   active
      //   paragraph={{ rows: 20 }}
      //   style={{
      //     width: 750,
      //     height: '100%',
      //     marginTop: 90
      //   }}
      // />
      <div />
    )
  }, [])

  return (
    <>
      <GlobalStyles mode={mode} />
      <Suspense fallback={fallback}>
        <Routes>
          {routes.map((R: any, key: number) => (
            <Route
              path={R.url}
              element={
                <Layout>
                  <R.Component />
                </Layout>
              }
              key={R.url + key}
            />
          ))}
        </Routes>
      </Suspense>
    </>
  )
}

export default App
