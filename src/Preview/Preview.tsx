import { JSX, useEffect, useState } from 'react'
import css from './Preview.module.scss'
import PreviewPDF from './PreviewPDF'
import { IngredientItem, StorageType } from '../globalTypes'
import {
  getRecipeNameFromSessionStorage,
  getSessionStorage,
} from '../Services/storageService'
import { useRecipeData } from '../AppContainer'

const Preview = (): JSX.Element => {
  const [{ recipeName, recipeIngredients, recipeInstructions }] =
    useRecipeData()
  const [pdfRecipeName, setPdfRecipeName] = useState<string>('')
  const [pdfIngredients, setPdfIngredients] = useState<IngredientItem[]>([])

  useEffect(() => {
    const currentRecName = getRecipeNameFromSessionStorage()
    setPdfRecipeName(currentRecName)
  }, [recipeName])

  useEffect(() => {
    const currentIngr = getSessionStorage(StorageType.INGREDIENT)
    setPdfIngredients(currentIngr as IngredientItem[])
  }, [recipeIngredients])

  return (
    <div className={css.preview}>
      <h2>Preview</h2>
      <PreviewPDF
        pdfRecipeName={pdfRecipeName}
        pdfIngredients={pdfIngredients}
        pdfInstructions={recipeInstructions}
      />
    </div>
  )
}

export default Preview
