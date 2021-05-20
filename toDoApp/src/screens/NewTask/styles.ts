import { Color } from '../../styles/Pallete'

import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  header: {
    backgroundColor: Color.electricBlue,
  },
  container: {
    flex: 1,
    backgroundColor: Color.almostWhite,
    marginHorizontal: 0,
  },
  separator: {
    backgroundColor: Color.separator,
    width: '100%',
    height: 2,
  },
  button: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 17,
    color: Color.almostWhite,
  },
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
