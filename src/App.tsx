import { JSX } from 'react'
import css from './App.module.scss'
import AppContainer from './AppContainer'

const App = (): JSX.Element => {
  return (
    <div className={css.app}>
      <h2>Create Save Recipe</h2>
      <div className={css.app_grid_cntr}>
        <AppContainer />
      </div>
    </div>
  )
}

export default App
