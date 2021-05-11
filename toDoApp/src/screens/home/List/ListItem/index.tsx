import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import { Check } from './Check/index'

//import { Color } from '../../../styles/Pallete'
//import { styles } from './styles' //?

export const ListItem = ({ title, subtitle }) => (
  <View style={styles.container}>
    <View style={styles.data}>
      <View style={styles.textSection}>
        <View style={styles.title}>
          <Text style={styles.titleFormat}>{title}</Text>
        </View>
        <View style={styles.subtitle}>
          <Text style={styles.subtitleFormat}>{subtitle}</Text>
        </View>
      </View>
      <View style={styles.checkboxSection}>
        <Check />
      </View>
    </View>
    <View style={styles.separator} />
  </View>
)
