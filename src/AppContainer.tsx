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
import css from './App.module.scss'

type AppContextProps = {
  showIngredients: boolean
  showInstructions: boolean
}

export const [useRecipeData, RecipeDataProvider] =
  createStateContext<RecipeDataContext>({
    recipeName: '',
    recipeIngredients: [],
    recipeInstructions: [],
  })

const AppContainer = ({
  showIngredients,
  showInstructions,
}: AppContextProps): JSX.Element => {
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
      <div className={css.app_left}>
        {showIngredients && <Ingredients />}
        {showInstructions && <Instructions />}
      </div>
      <div className={css.app_right}>
        <RecipeName />
        <Preview />
      </div>
    </>
  )
}

const AppContext = ({
  showIngredients,
  showInstructions,
}: AppContextProps): JSX.Element => (
  <RecipeDataProvider>
    <AppContainer
      showIngredients={showIngredients}
      showInstructions={showInstructions}
    />
  </RecipeDataProvider>
)

export default AppContext
