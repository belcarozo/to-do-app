import { Color } from '../../../styles/Pallete'

import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 72,
    width: '100%',
  },
  data: {
    flexDirection: 'row',
    height: 70,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 14,
    //backgroundColor: 'red',
  },
  textSection: {
    flex: 3,
    //backgroundColor: 'blue',
  },
  checkboxSection: {
    flex: 1,
  },
  title: {
    flex: 1,
    //backgroundColor: 'yellow',
  },
  subtitle: {
    flex: 1,
    //backgroundColor: 'orange',
  },
  separator: {
    backgroundColor: Color.separator,
    width: '100%',
    height: 2,
  },
  titleFormat: {
    fontSize: 16,
    fontFamily: 'SourceSansPro-Regular',
  },
  subtitleFormat: {
    color: Color.lightGray,
    fontSize: 14,
  },
})
