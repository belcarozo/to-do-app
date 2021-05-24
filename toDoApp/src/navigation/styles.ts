import { Color } from '../styles/Pallete'

import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  header: {
    backgroundColor: Color.electricBlue,
  },
  button: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  addButton: {
    fontSize: 28,
    fontWeight: '300',
    color: Color.almostWhite,
  },
  buttonText: {
    fontSize: 17,
    color: Color.almostWhite,
  },
})
