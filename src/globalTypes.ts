export type RecipeDataContext = {
  recipeName: string
  recipeIngredients: IngredientItem[]
  recipeInstructions: InstructionItem[]
}

export enum StorageType {
  RECIPE_NAME = 'Recipe Name',
  INGREDIENT = 'Ingredient',
  INSTRUCTION = 'Instruction',
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
}

export type InstructionItem = {
  id: string
  step: string
}
