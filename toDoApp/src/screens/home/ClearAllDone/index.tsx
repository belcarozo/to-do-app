import React from 'react'
import { styles } from './styles'
import { Pressable, Text } from 'react-native'

export const ClearAllDone: React.FC<{ clearDone: () => void }> = ({
  clearDone,
}) => (
  <Pressable onPress={clearDone}>
    <Text style={styles.title}>CLEAR ALL DONE</Text>
  </Pressable>
)
