import { SettingsState } from '../store/reducers/settingsSlice'

export const populateLocalStorage = (params: Record<string, any>) => {
  for (const key in params) {
    localStorage.setItem(key, params[key])
  }
}

export const populateReduxInitialState = () => {
  const localLang = localStorage.getItem('i18nextLng')
  const mode = localStorage.getItem('mode')
  return {
    mode,
    language: {
      key: localLang,
      label: localLang?.toUpperCase()
    }
  }
}

export const withStorage = (initialState: SettingsState): any => {
  if (!localStorage.length) {
    populateLocalStorage({
      mode: 'light'
    })
    return initialState
  }
  return populateReduxInitialState()
}
