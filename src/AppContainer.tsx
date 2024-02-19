import { createStateContext, useEffectOnce } from 'react-use'
import {
  IngredientItem,
  InstructionItem,
  RecipeDataContext,
  StorageType,
} from './globalTypes'
import RecipeName from './RecipeName/RecipeName'
import Ingredients from './Ingredients/Ingredients'
import Instructions from './Instructions/Instructions'
import Preview from './Preview/Preview'
import { getSessionStorage } from './Services/storageService'

export const [useRecipeData, RecipeDataProvider] =
  createStateContext<RecipeDataContext>({
    recipeName: '',
    recipeIngredients: [],
    recipeInstructions: [],
  })

const AppContainer = (): JSX.Element => {
  const setRecipeData = useRecipeData()[1]

  useEffectOnce(() => {
    const storageRecipeName = getSessionStorage(StorageType.RECIPE_NAME)
    const storageIngredients = getSessionStorage(StorageType.INGREDIENT)
    const storageInstructions = getSessionStorage(StorageType.INSTRUCTION)

    setRecipeData((prev) => ({
      ...prev,
      recipeName: storageRecipeName ? (storageRecipeName as string) : '',
      recipeIngredients: storageIngredients
        ? (storageIngredients as IngredientItem[])
        : [],
      recipeInstructions: storageInstructions
        ? (storageInstructions as InstructionItem[])
        : [],
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
