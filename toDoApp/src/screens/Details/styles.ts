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
})
