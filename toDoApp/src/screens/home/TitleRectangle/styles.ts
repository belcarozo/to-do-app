import { Color } from '../../../styles/Pallete'

import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  rectangle: {
    width: '100%',
    height: '7%',
    backgroundColor: Color.electricBlue,
    flexDirection: 'row',
    paddingHorizontal: 14,
  },
  title: {
    color: Color.almostWhite,
    letterSpacing: -0.41,
    fontSize: 17,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: Color.separator,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  empty: {
    flex: 1,
  },
  topText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 28,
    fontWeight: '300',
    color: Color.almostWhite,
  },
  button: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
})
