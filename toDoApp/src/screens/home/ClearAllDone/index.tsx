import React from 'react'
import { styles } from './styles'
import { Pressable, Text } from 'react-native'
import { strings } from './strings'

export const ClearAllDone: React.FC<{ clearDone: () => void }> = ({
  clearDone,
}) => (
  <Pressable onPress={clearDone}>
    <Text style={styles.title}>{strings.clear}</Text>
  </Pressable>
)
