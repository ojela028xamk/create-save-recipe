import { createStateContext } from 'react-use'
import { RecipeDataContext } from './globalTypes'
import RecipeName from './RecipeName/RecipeName'
import Ingredients from './Ingredients/Ingredients'
import Instructions from './Instructions/Instructions'
import Preview from './Preview/Preview'

export const [useRecipeData, RecipeDataProvider] =
  createStateContext<RecipeDataContext>({
    recipeName: {
      id: 'recipeNameStorage',
      recipe_name: '',
    },
    recipeIngredients: [],
    recipeInstructions: [],
  })

const AppContainer = (): JSX.Element => {
  return (
    <RecipeDataProvider>
      <RecipeName />
      <Ingredients />
      <Instructions />
      <Preview />
    </RecipeDataProvider>
  )
}

export default AppContainer
