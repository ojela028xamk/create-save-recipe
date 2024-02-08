// https://react-pdf.org/
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from '@react-pdf/renderer'
import { IngredientItem, InstructionItem } from '../globalTypes'

const styles = StyleSheet.create({
  header: {
    border: '2px solid black',
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  header_text: {
    position: 'absolute',
    top: '120',
    left: '150',
    border: '2px solid black',
    fontSize: 50,
  },
  header_image: {
    border: '5px solid black',
    width: '50%',
    zIndex: '-1',
  },
  section: {
    border: '2px solid black',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    border: '2px solid black',
  },
  ingredients: {
    border: '2px solid black',
    flex: 1,
    width: 400,
  },
  instructions: {
    border: '2px solid black',
    flex: 1,
    width: 400,
  },
})

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
          <Image
            src={'https://react-pdf.org/images/og-banner.png'}
            style={styles.header_image}
          ></Image>
        </View>
        <View style={styles.content}>
          <View style={styles.ingredients}>
            {pdfIngredients.map((item, index) => (
              <Text key={item.id}>
                {index + 1}. {item.name} {item.amount} {item.unit}
              </Text>
            ))}
          </View>
          <View style={styles.instructions}>
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
