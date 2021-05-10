import React from 'react'

import { SafeAreaView } from 'react-native'
import { ListItem } from './ListItem'
import { styles } from './styles'
import { TitleRectangle } from './TitleRectangle'

export const Home = () => (
  <SafeAreaView style={styles.container}>
    <TitleRectangle />
    <ListItem />
  </SafeAreaView>
)
