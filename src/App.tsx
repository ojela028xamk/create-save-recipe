import { JSX, useState } from 'react'
import AppContext from './AppContainer'
import css from './App.module.scss'
import Navigation from './Navigation/Navigation'

const App = (): JSX.Element => {
  const [showIngredientsNav, setShowIngredientsNav] = useState<boolean>(true)
  const [showInstructionsNav, setShowInstructionsNav] = useState<boolean>(false)

  const handleNavigation = (
    showIngredients: boolean,
    showInstructions: boolean
  ): void => {
    setShowIngredientsNav(showIngredients)
    setShowInstructionsNav(showInstructions)
  }

  return (
    <div className={css.app}>
      <Navigation
        toggleNav={handleNavigation}
        showIngredients={showIngredientsNav}
        showInstructions={showInstructionsNav}
      />
      <div className={css.app_grid_cntr}>
        <AppContext
          showIngredients={showIngredientsNav}
          showInstructions={showInstructionsNav}
        />
      </div>
    </div>
  )
}

export default App
