import { createSlice } from '@reduxjs/toolkit'

import { populateLocalStorage, withStorage } from '../../utils/storage'

export interface SettingsState {
  mode: 'light' | 'night'
  language: {
    key: string
    label: string
  }
  isLoading: boolean
  randomPage: number
}

const initialState: SettingsState = withStorage({
  mode: 'light',
  language: {
    key: 'en',
    label: 'EN'
  },
  randomPage: Math.floor(Math.random() * 500),
  isLoading: false
})

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.language.key = action.payload.key
      state.language.label = action.payload.label
    },
    changeMode: (state, action) => {
      state.mode = action.payload
      populateLocalStorage({ mode: action.payload })
    },
    changeLoadProcess: (state, action) => {
      state.isLoading = action.payload
    },
    changeRandomPage: (state) => {
      state.randomPage = Math.floor(Math.random() * 500)
    }
  }
})

export const {
  changeLanguage,
  changeMode,
  changeLoadProcess,
  changeRandomPage
} = settingsSlice.actions

export default settingsSlice.reducer
