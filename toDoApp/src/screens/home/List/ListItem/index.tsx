import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import { Check } from './Check/index'

export const ListItem: React.FC<{
  title: string
  subtitle: string
  checked: boolean
  id: number
  onPress: (id: number) => () => void
}> = ({ title, subtitle, checked, id, onPress }) => (
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
        <Check value={checked} onPress={onPress} id={id} />
      </View>
    </View>
    <View style={styles.separator} />
  </View>
)
