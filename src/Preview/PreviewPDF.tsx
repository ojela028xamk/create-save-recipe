// How to download web pages as PDF in React -> https://www.youtube.com/watch?v=QaZ2CoYFO60
import {
  IngredientItem,
  IngredientUnitValue,
  InstructionItem,
} from '../globalTypes'
import { useRef } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { Button } from 'react-bootstrap'
import css from './Preview.module.scss'

type PreviewPDFProps = {
  pdfRecipeName: string
  pdfRecipeImage: string
  pdfIngredients: IngredientItem[]
  pdfInstructions: InstructionItem[]
}

const PreviewPDF = ({
  pdfRecipeName,
  pdfRecipeImage,
  pdfIngredients,
  pdfInstructions,
}: PreviewPDFProps): JSX.Element => {
  const pdfRef = useRef<HTMLDivElement>(null)

  const downloadPDF = (): void => {
    const input = pdfRef.current

    if (input) {
      html2canvas(input, { useCORS: true }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF('p', 'mm', 'a4', true)
        const pdfWidth = 210.0015555555555
        const pdfHeight = 297.0000833333333
        const imgWidth = canvas.width
        const imgHeight = canvas.height
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
        const imgX = (pdfWidth - imgWidth * ratio) / 2
        const imgY = 0
        pdf.addImage(
          imgData,
          'png',
          imgX,
          imgY,
          imgWidth * ratio,
          imgHeight * ratio
        )
        pdf.save(`${pdfRecipeName}.pdf`)
      })
    }
  }

  return (
    <>
      <Button variant='light' onClick={downloadPDF}>
        <span>Save PDF</span> <i className='bi bi-file-earmark-pdf'></i>
      </Button>
      <div className={css.preview_pdf} ref={pdfRef}>
        <div className={css.header}>
          <h1 className={css.header_text}>{pdfRecipeName}</h1>
          <div
            className={css.header_image}
            style={{ backgroundImage: `url(${pdfRecipeImage})` }}
          ></div>
        </div>
        <div className={css.content}>
          <div className={css.ingredients}>
            <h4>Ingredients</h4>
            <ul>
              {pdfIngredients.map((item) => (
                <li key={item.id}>
                  {item.unit === IngredientUnitValue.AMOUNT ? (
                    <span>
                      {item.name} {item.amount}x
                    </span>
                  ) : (
                    <span>
                      {item.name} {item.amount} {item.unit}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className={css.instructions}>
            <h4>Instructions</h4>
            <ul>
              {pdfInstructions.map((item, index) => (
                <li key={item.id}>
                  {index + 1}. {item.step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default PreviewPDF
