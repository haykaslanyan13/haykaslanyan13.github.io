import { createSlice } from '@reduxjs/toolkit'

import { populateLocalStorage, withStorage } from '../../utils/storage'

export interface SettingsState {
  mode: 'light' | 'night'
  language: {
    key: string
    label: string
  }
  isLoading: boolean
}

const initialState: SettingsState = withStorage({
  mode: 'light',
  language: {
    key: 'en',
    label: 'EN'
  },
  isLoading: false
})

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.language.key = action.payload.key
      state.language.label = action.payload.label
      // populateLocalStorage({ i18nextLng: action.payload.key })
    },
    changeMode: (state, action) => {
      state.mode = action.payload
      populateLocalStorage({ mode: action.payload })
    },
    changeLoadProcess: (state, action) => {
      state.isLoading = action.payload
    }
  }
})

export const { changeLanguage, changeMode, changeLoadProcess } =
  settingsSlice.actions

export default settingsSlice.reducer
