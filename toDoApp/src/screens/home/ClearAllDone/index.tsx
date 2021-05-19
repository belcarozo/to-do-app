import React from 'react'
import { styles } from './styles'
import { Pressable, Text, Alert } from 'react-native'

export const ClearAllDone = ({ clearDone }) => (
  <Pressable onPress={clearDone}>
    <Text style={styles.title}>CLEAR ALL DONE</Text>
  </Pressable>
)
