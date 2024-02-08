// https://react-pdf.org/
import { Page, Text, View, Document, Image } from '@react-pdf/renderer'
import { IngredientItem, InstructionItem } from '../globalTypes'
import { styles } from './styles'

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
  return (
    <Document>
      <Page size="A4">
        <View style={styles.header}>
          <Text style={styles.header_text}>{pdfRecipeName}</Text>
          <View style={styles.header_image}>
            <Image src={'https://react-pdf.org/images/og-banner.png'}></Image>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.ingredients}>
            <Text>INGREDIENTS</Text>
            {pdfIngredients.map((item, index) => (
              <Text key={item.id}>
                {index + 1}. {item.name} {item.amount} {item.unit}
              </Text>
            ))}
          </View>
          <View style={styles.instructions}>
            <Text>INSTRUCTIONS</Text>
            {pdfInstructions.map((item, index) => (
              <Text key={item.id}>
                {index + 1}. {item.step}
              </Text>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default PreviewPDF
