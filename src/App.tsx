import { JSX } from 'react'
import AppContext from './AppContainer'
import css from './App.module.scss'

const App = (): JSX.Element => {
  return (
    <div className={css.app}>
      <h2>Create Save Recipe</h2>
      <div className={css.app_grid_cntr}>
        <AppContext />
      </div>
    </div>
  )
}

export default App
