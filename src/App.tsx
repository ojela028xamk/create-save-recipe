import { JSX } from 'react'
import css from './App.module.scss'
import Ingredients from './Ingredients/Ingredients'
import Instructions from './Instructions/Instructions'
import Preview from './Preview/Preview'
import RecipeName from './RecipeName/RecipeName'

const App = (): JSX.Element => {
  return (
    <div className={css.app}>
      <h2>Create Save Recipe</h2>
      <div className={css.app_grid_cntr}>
        <RecipeName />
        <Ingredients />
        <Instructions />
        <Preview />
      </div>
    </div>
  )
}

export default App
