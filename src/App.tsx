import { JSX } from 'react'
import AppContext from './AppContainer'
import css from './App.module.scss'
import Navigation from './Navigation/Navigation'

const App = (): JSX.Element => {
  return (
    <div className={css.app}>
      <Navigation />
      <div className={css.app_grid_cntr}>
        <AppContext />
      </div>
    </div>
  )
}

export default App
