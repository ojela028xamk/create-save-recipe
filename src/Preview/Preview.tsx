// https://react-pdf.org/
import { JSX, useState } from 'react'
import css from './Preview.module.scss'
import { PDFViewer } from '@react-pdf/renderer'
import PreviewPDF from './PreviewPDF'
import { IngredientItem, InstructionItem, StorageType } from '../globalTypes'
import {
  getRecipeNameFromSessionStorage,
  getSessionStorage,
} from '../Services/storageService'

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

  return (
    <div className={css.preview}>
      <h3>Preview</h3>
      <button onClick={getStorage}>Render</button>
      <PDFViewer>
        <PreviewPDF
          pdfRecipeName={pdfRecipeName}
          pdfIngredients={pdfIngredients}
          pdfInstructions={pdfInstructions}
        />
      </PDFViewer>
      <br />
      {/* <PDFDownloadLink document={<PreviewPDF />} fileName="testi.pdf">
        {({ loading }) => (loading ? 'Loading document...' : 'Download PDF')}
      </PDFDownloadLink> */}
    </div>
  )
}

export default Preview
