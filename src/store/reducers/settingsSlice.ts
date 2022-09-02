import { createSlice } from '@reduxjs/toolkit'

import { populateLocalStorage, withStorage } from '../../utils/storage'

export interface SettingsState {
  mode: 'light' | 'night'
  language: {
    key: string
    label: string
  }
}

const initialState: SettingsState = withStorage({
  mode: 'light',
  language: {
    key: 'en',
    label: 'EN'
  }
})

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.language.key = action.payload.key
      state.language.label = action.payload.label
      populateLocalStorage({ localLang: action.payload.key })
    },
    changeMode: (state, action) => {
      state.mode = action.payload
      populateLocalStorage({ mode: action.payload })
    }
  }
})

export const { changeLanguage, changeMode } = settingsSlice.actions

export default settingsSlice.reducer
