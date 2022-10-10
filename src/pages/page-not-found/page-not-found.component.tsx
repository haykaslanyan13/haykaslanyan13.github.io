import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Routes } from '../../enums/routes.enum'
import { RootState } from '../../store/store'
import { scrollToTop } from '../../utils/scroll'
import Styles from './page-not-found.styles'

const PageNotFound = () => {
  const navigate = useNavigate()
  const { mode } = useSelector((state: RootState) => state.settings)
  return (
    <Styles $mode={mode}>
      <div className={'PageNotFound'}>
        <h1 className={'PageNotFound__404'}>404</h1>
        <p className={'PageNotFound__text'}>
          You seem to be lost, or maybe this page never existed?
        </p>
        <button
          onClick={() => {
            navigate(Routes.HOME)
            scrollToTop('auto')
          }}
          className={'PageNotFound__back-button'}
        >
          Go Back Home
        </button>
      </div>
    </Styles>
  )
}

export default PageNotFound
