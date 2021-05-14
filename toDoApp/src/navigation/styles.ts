import { Color } from '../styles/Pallete'

import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  header: {
    backgroundColor: Color.electricBlue,
  },
  button: {
    flex: 1,
    paddingRight: 15,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 28,
    fontWeight: '300',
    color: Color.almostWhite,
  },
})
