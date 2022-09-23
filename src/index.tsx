import './i18n'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { SWRConfig } from 'swr'

import App from './App'
import { store } from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const swrConfig = {
  revalidateOnFocus: false,
  revalidateOnReconnect: true
}

root.render(
  <React.StrictMode>
    <SWRConfig value={swrConfig}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </SWRConfig>
  </React.StrictMode>
)
