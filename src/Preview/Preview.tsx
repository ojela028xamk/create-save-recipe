import { JSX, useEffect, useState } from 'react'
import css from './Preview.module.scss'
import PreviewPDF from './PreviewPDF'
import { IngredientItem, InstructionItem, StorageType } from '../globalTypes'
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
  const [pdfInstructions, setPdfInstructions] = useState<InstructionItem[]>([])

  useEffect(() => {
    const currentRecName = getRecipeNameFromSessionStorage()
    setPdfRecipeName(currentRecName)
  }, [recipeName])

  useEffect(() => {
    const currentIngr = getSessionStorage(StorageType.INGREDIENT)
    setPdfIngredients(currentIngr as IngredientItem[])
  }, [recipeIngredients])

  useEffect(() => {
    const currentInst = getSessionStorage(StorageType.INSTRUCTION)
    setPdfInstructions(currentInst as InstructionItem[])
  }, [recipeInstructions])

  return (
    <div className={css.preview}>
      <h2>Preview</h2>
      <PreviewPDF
        pdfRecipeName={pdfRecipeName}
        pdfIngredients={pdfIngredients}
        pdfInstructions={pdfInstructions}
      />
    </div>
  )
}

export default Preview
