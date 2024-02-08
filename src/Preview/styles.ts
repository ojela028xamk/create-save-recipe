import { StyleSheet } from '@react-pdf/renderer'

export const styles = StyleSheet.create({
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
    border: '2px solid black',
    borderRadius: 2,
    boxShadow: '5px 5px #fe5000ff',
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
