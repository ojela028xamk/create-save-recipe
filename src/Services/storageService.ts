import { IngredientItem, InstructionItem, StorageType } from '../globalTypes'

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

export { getSessionStorage }
