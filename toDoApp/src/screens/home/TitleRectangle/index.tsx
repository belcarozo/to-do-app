import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { styles } from './styles' //?

export const TitleRectangle = () => (
  <View style={styles.rectangle}>
    <View style={styles.empty} />
    <View style={styles.topText}>
      <Text style={styles.title}>Todo</Text>
    </View>
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}>+</Text>
    </Pressable>
  </View>
)
