import React from 'react'
import { styles } from './styles'
import { Pressable, Text } from 'react-native'
import { constants } from './constants'

export const ClearAllDone: React.FC<{ clearDone: () => void }> = ({
  clearDone,
}) => (
  <Pressable onPress={clearDone}>
    <Text style={styles.title}>{constants.clear}</Text>
  </Pressable>
)
