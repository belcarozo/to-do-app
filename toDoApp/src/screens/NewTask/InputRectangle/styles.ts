import { StyleSheet } from 'react-native'
import { Color } from '../../../styles/Pallete'

export const styles = StyleSheet.create({
  inputRectangle: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 31,
    paddingBottom: 76,
  },
  title: {
    color: 'black',
    fontSize: 36,
  },
  description: {
    paddingTop: 17,
    fontSize: 14,
    color: Color.lightGray,
  },
  titleUnderline: {
    backgroundColor: Color.xlPink,
    paddingHorizontal: 20,
    height: 2,
  },
})
