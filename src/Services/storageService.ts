import { IngredientItem, InstructionItem, StorageType } from '../globalTypes'

const getSessionStorage = (
  type: StorageType
): IngredientItem[] | InstructionItem[] | string | null => {
  const storageItem = sessionStorage.getItem(type)

  if (storageItem) {
    const parsedStorageItem = JSON.parse(storageItem)
    return parsedStorageItem
  }

  return null
}

export { getSessionStorage }
