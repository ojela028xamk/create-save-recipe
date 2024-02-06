// https://react-pdf.org/
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
})

const PreviewPDF = (): JSX.Element => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Recipe Name</Text>
      </View>
      <View style={styles.section}>
        <Text>Ingredients</Text>
      </View>
      <View style={styles.section}>
        <Text>Instructions</Text>
      </View>
      <View style={styles.section}>
        <Text>Image</Text>
      </View>
    </Page>
  </Document>
)

export default PreviewPDF
