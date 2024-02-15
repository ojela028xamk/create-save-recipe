import { JSX, useState } from 'react'
import css from './Preview.module.scss'
import PreviewPDF from './PreviewPDF'
import { IngredientItem, InstructionItem, StorageType } from '../globalTypes'
import {
  getRecipeNameFromSessionStorage,
  getSessionStorage,
} from '../Services/storageService'
import { useEffectOnce } from 'react-use'
import { Button } from 'react-bootstrap'

const Preview = (): JSX.Element => {
  const [pdfRecipeName, setPdfRecipeName] = useState<string>('')
  const [pdfIngredients, setPdfIngredients] = useState<IngredientItem[]>([])
  const [pdfInstructions, setPdfInstructions] = useState<InstructionItem[]>([])

  const getStorage = (): void => {
    const currentRecName = getRecipeNameFromSessionStorage()
    const currentIngr = getSessionStorage(StorageType.INGREDIENT)
    const currentInst = getSessionStorage(StorageType.INSTRUCTION)
    setPdfRecipeName(currentRecName)
    setPdfIngredients(currentIngr as IngredientItem[])
    setPdfInstructions(currentInst as InstructionItem[])
  }

  useEffectOnce(() => {
    getStorage()
  })

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
