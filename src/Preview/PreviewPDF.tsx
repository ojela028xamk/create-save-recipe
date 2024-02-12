// How to download web pages as PDF in React -> https://www.youtube.com/watch?v=QaZ2CoYFO60
import { IngredientItem, InstructionItem } from '../globalTypes'
import { useRef } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { Button, Image } from 'react-bootstrap'
import css from './Preview.module.scss'

type PreviewPDFProps = {
  pdfRecipeName: string
  pdfIngredients: IngredientItem[]
  pdfInstructions: InstructionItem[]
}

const PreviewPDF = ({
  pdfRecipeName,
  pdfIngredients,
  pdfInstructions,
}: PreviewPDFProps): JSX.Element => {
  const pdfRef = useRef(null)

  const downloadPDF = (): void => {
    const input = pdfRef.current

    if (input) {
      html2canvas(input, { useCORS: true }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF('p', 'mm', 'a4', true)
        const pdfWidth = pdf.internal.pageSize.getWidth()
        const pdfHeight = pdf.internal.pageSize.getHeight()
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
        pdf.save('testi123.pdf')
      })
    }
  }

  return (
    <>
      <Button onClick={downloadPDF}>
        <span>Save PDF</span> <i className="bi bi-file-earmark-pdf"></i>
      </Button>
      <div className={css.preview_pdf} ref={pdfRef}>
        <div className={css.header}>
          <h2 className={css.header_text}>{pdfRecipeName}</h2>
          <Image
            className={css.header_image}
            src={
              'https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }
          />
        </div>
        <div className={css.content}>
          <div className={css.ingredients}>
            <h4>Ingredients</h4>
            <ul>
              {pdfIngredients.map((item) => (
                <li key={item.id}>
                  {item.name} {item.amount} {item.unit}
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
