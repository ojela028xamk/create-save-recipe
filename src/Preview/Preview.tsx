// https://react-pdf.org/
import { JSX, useState } from 'react'
import css from './Preview.module.scss'
import { PDFViewer } from '@react-pdf/renderer'
import PreviewPDF from './PreviewPDF'
import { IngredientItem, InstructionItem, StorageType } from '../globalTypes'
import { getSessionStorage } from '../Services/storageService'

const Preview = (): JSX.Element => {
  const [pdfIngredients, setPdfIngredients] = useState<IngredientItem[]>([])
  const [pdfInstructions, setPdfInstructions] = useState<InstructionItem[]>([])

  const getStorage = (): void => {
    const currentIngr = getSessionStorage(StorageType.INGREDIENT)
    const currentInst = getSessionStorage(StorageType.INSTRUCTION)
    setPdfIngredients(currentIngr as IngredientItem[])
    setPdfInstructions(currentInst as InstructionItem[])
  }

  return (
    <div className={css.preview}>
      <h3>Preview</h3>
      <button onClick={getStorage}>Render</button>
      <PDFViewer>
        <PreviewPDF
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
