// https://react-pdf.org/
import { JSX } from 'react'
import css from './Preview.module.scss'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import PreviewPDF from './PreviewPDF'

const Preview = (): JSX.Element => {
  return (
    <div className={css.preview}>
      <h3>Preview</h3>
      <PDFViewer>
        <PreviewPDF />
      </PDFViewer>
      <br />
      <PDFDownloadLink document={<PreviewPDF />} fileName="testi.pdf">
        {({ loading }) => (loading ? 'Loading document...' : 'Download PDF')}
      </PDFDownloadLink>
    </div>
  )
}

export default Preview
