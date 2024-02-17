export type RecipeDataContext = {
  recipeName: RecipeNameValue
  recipeIngredients: IngredientItem[]
  recipeInstructions: InstructionItem[]
}

export enum StorageType {
  INGREDIENT = 'Ingredient',
  INSTRUCTION = 'Instruction',
}

export type RecipeNameValue = {
  id: string
  recipe_name: string
}

export enum IngredientUnitValue {
  AMOUNT = 'amount',
  GRAM = 'g',
  MILLILITRE = 'ml',
  TEASPOON = 'tsp',
  TABLESPOON = 'tbsp',
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
