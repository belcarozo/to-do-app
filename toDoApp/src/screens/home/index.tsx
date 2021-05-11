import React from 'react'

import { SafeAreaView, View } from 'react-native'
import { ClearAllDone } from './ClearAllDone'
//import { ListItem } from './List/ListItem'
import { List } from './List'
import { ListItem } from './List/ListItem'
import { styles } from './styles'
import { TitleRectangle } from './TitleRectangle'

export const Home = () => (
  <SafeAreaView style={styles.container}>
    <TitleRectangle />
    <View>
      <List />
    </View>
    <View style={styles.center}>
      <ClearAllDone />
    </View>
  </SafeAreaView>
)
