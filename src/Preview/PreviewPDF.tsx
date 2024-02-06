// https://react-pdf.org/
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from '@react-pdf/renderer'

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
  ingredients: { border: '2px solid black', flex: 1 },
  instructions: { border: '2px solid black', flex: 1 },
})

const PreviewPDF = (): JSX.Element => (
  <Document>
    <Page size="A4">
      <View style={styles.header}>
        <Text style={styles.header_text}>Recipe Name</Text>
        <Image
          src={'https://react-pdf.org/images/og-banner.png'}
          style={styles.header_image}
        ></Image>
      </View>
      <View style={styles.content}>
        <Text style={styles.ingredients}>Ingredients</Text>
        <Text style={styles.instructions}>Instructions</Text>
      </View>
    </Page>
  </Document>
)

export default PreviewPDF
