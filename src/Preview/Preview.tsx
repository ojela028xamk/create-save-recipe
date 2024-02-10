import { JSX, useState } from 'react'
import css from './Preview.module.scss'
import PreviewPDF from './PreviewPDF'
import { IngredientItem, InstructionItem, StorageType } from '../globalTypes'
import {
  getRecipeNameFromSessionStorage,
  getSessionStorage,
} from '../Services/storageService'
import { useEffectOnce } from 'react-use'

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
      <h3>Preview</h3>
      <PreviewPDF
        pdfRecipeName={pdfRecipeName}
        pdfIngredients={pdfIngredients}
        pdfInstructions={pdfInstructions}
      />
      <button onClick={getStorage}>Render</button>
    </div>
  )
}

export default Preview
