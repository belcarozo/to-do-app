import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

//import { Color } from '../../../styles/Pallete'
//import { styles } from './styles' //?

export const ListItem = () => (
  <View style={styles.container}>
    <View style={styles.data}>
      <View style={styles.textSection}>
        <View style={styles.title}>
          <Text style={styles.titleFormat}>Two-line item</Text>
        </View>
        <View style={styles.subtitle}>
          <Text style={styles.subtitleFormat}>Secondary text</Text>
        </View>
      </View>
      <View style={styles.checkboxSection} />
    </View>
    <View style={styles.separator} />
  </View>
)
