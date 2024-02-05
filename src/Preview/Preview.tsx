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
      <PDFDownloadLink document={<PreviewPDF />} fileName="testi.pdf">
        {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
    </div>
  )
}

export default Preview
