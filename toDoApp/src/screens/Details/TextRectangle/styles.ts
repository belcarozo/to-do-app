import { StyleSheet } from 'react-native'
import { Color } from '../../../styles/Pallete'

export const styles = StyleSheet.create({
  textRectangle: {
    backgroundColor: 'white',
    paddingLeft: 18,
    paddingBottom: 18,
  },
  title: {
    color: 'black',
    fontSize: 36,
    //fontFamily: 'SourceSansPro-Regular',
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
  state: {
    fontSize: 12,
    color: Color.xlPink,
    paddingTop: 18,
    //paddingLeft: 18,
  },
  clear: {
    fontSize: 14,
    paddingVertical: 9,
    color: Color.xlPink,
    //fontFamily: 'SourceSansPro',
    fontWeight: 'bold',
  },
  center: {
    alignItems: 'center',
    paddingTop: 27,
  },
})
