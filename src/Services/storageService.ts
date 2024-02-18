import {
  IngredientItem,
  InstructionItem,
  RecipeNameValue,
  StorageType,
} from '../globalTypes'

const getRecipeNameFromSessionStorage = (): string => {
  const storageRecipeName = sessionStorage.getItem('recipeNameStorage')

  if (storageRecipeName) {
    const parsedStorageRecipeName = JSON.parse(
      storageRecipeName
    ) as RecipeNameValue
    return parsedStorageRecipeName.recipe_name
  } else {
    return ''
  }
}

const getSessionStorage = (
  type: StorageType
): IngredientItem[] | InstructionItem[] => {
  if (type === StorageType.INGREDIENT) {
    const storageIngredientsArr = sessionStorage.getItem('ingredientsArr')

    if (storageIngredientsArr) {
      const parsedIngredientsArr = JSON.parse(storageIngredientsArr)
      return parsedIngredientsArr
    }
  }

  if (type === StorageType.INSTRUCTION) {
    const storageInstructionsArr = sessionStorage.getItem('instructionsArr')

    if (storageInstructionsArr) {
      const parsedInstructionsArr = JSON.parse(storageInstructionsArr)
      return parsedInstructionsArr
    }
  }

  return []
}

export { getRecipeNameFromSessionStorage, getSessionStorage }
