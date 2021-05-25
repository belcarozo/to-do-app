import { StyleSheet } from 'react-native'
import { Color } from '../../../../styles/Pallete'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 72,
    width: '100%',
  },
  data: {
    flexDirection: 'row',
    height: 70,
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 14,
  },
  textSection: {
    flex: 6.7,
  },
  checkboxSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressableTitle: {
    flex: 1,
  },
  subtitle: {
    flex: 1,
  },
  separator: {
    backgroundColor: Color.separator,
    width: '100%',
    height: 2,
  },
  titleFormat: {
    fontSize: 16,
  },
  subtitleFormat: {
    color: Color.lightGray,
    fontSize: 14,
  },
})
