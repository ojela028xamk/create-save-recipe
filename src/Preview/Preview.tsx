import { JSX, useEffect, useState } from 'react'
import css from './Preview.module.scss'
import PreviewPDF from './PreviewPDF'
import { IngredientItem, InstructionItem, StorageType } from '../globalTypes'
import {
  getRecipeNameFromSessionStorage,
  getSessionStorage,
} from '../Services/storageService'
import { Button } from 'react-bootstrap'
import { useRecipeData } from '../AppContainer'

const Preview = (): JSX.Element => {
  const [{ recipeName }] = useRecipeData()

  const [pdfRecipeName, setPdfRecipeName] = useState<string>('')
  const [pdfIngredients, setPdfIngredients] = useState<IngredientItem[]>([])
  const [pdfInstructions, setPdfInstructions] = useState<InstructionItem[]>([])

  const getStorage = (): void => {
    const currentIngr = getSessionStorage(StorageType.INGREDIENT)
    const currentInst = getSessionStorage(StorageType.INSTRUCTION)
    setPdfIngredients(currentIngr as IngredientItem[])
    setPdfInstructions(currentInst as InstructionItem[])
  }

  useEffect(() => {
    const currentRecName = getRecipeNameFromSessionStorage()
    setPdfRecipeName(currentRecName)
  }, [recipeName])

  return (
    <div className={css.preview}>
      <h2>Preview</h2>
      <Button onClick={getStorage}>Render</Button>
      <PreviewPDF
        pdfRecipeName={pdfRecipeName}
        pdfIngredients={pdfIngredients}
        pdfInstructions={pdfInstructions}
      />
    </div>
  )
}

export default Preview
