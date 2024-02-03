export enum StorageType {
  INGREDIENT = 'Ingredient',
  INSTRUCTION = 'Instruction',
}

export enum IngredientUnitValue {
  GRAM = 'g',
  MILLILITRE = 'ml',
}

export type IngredientItem = {
  id: string
  name: string
  amount: number
  unit: IngredientUnitValue | string
  storageType: StorageType.INGREDIENT
}

export type InstructionItem = {
  id: string
  step: string
  storageType: StorageType.INSTRUCTION
}
