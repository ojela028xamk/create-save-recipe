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
  const storageKeys = Object.keys(sessionStorage)
  const storageList: IngredientItem[] | InstructionItem[] = []

  for (const key of storageKeys) {
    const storageItem = sessionStorage.getItem(key)

    if (storageItem) {
      const parsedStorageItem = JSON.parse(storageItem)

      if (parsedStorageItem.storageType === type) {
        storageList.push(parsedStorageItem)
      }
    }
  }

  return storageList
}

export { getRecipeNameFromSessionStorage, getSessionStorage }
