import { createStateContext, useEffectOnce } from 'react-use'
import { InstructionItem, RecipeDataContext, StorageType } from './globalTypes'
import RecipeName from './RecipeName/RecipeName'
import Ingredients from './Ingredients/Ingredients'
import Instructions from './Instructions/Instructions'
import Preview from './Preview/Preview'
import { getSessionStorage } from './Services/storageService'

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
  const setRecipeData = useRecipeData()[1]

  useEffectOnce(() => {
    const storageInstructions = getSessionStorage(StorageType.INSTRUCTION)
    setRecipeData((prev) => ({
      ...prev,
      recipeInstructions: storageInstructions as InstructionItem[],
    }))
  })

  return (
    <>
      <RecipeName />
      <Ingredients />
      <Instructions />
      <Preview />
    </>
  )
}

const AppContext = (): JSX.Element => (
  <RecipeDataProvider>
    <AppContainer />
  </RecipeDataProvider>
)

export default AppContext
