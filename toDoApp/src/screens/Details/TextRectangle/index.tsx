import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import { TextRectangleInterface } from './types'

export const TextRectangle: React.FC<TextRectangleInterface> = ({
  showState,
  title,
  description,
  onPress,
  buttonString,
}) => {
  return (
    <View style={styles.textRectangle}>
      <Text style={styles.state}>{showState}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.center}>
        <Pressable onPress={onPress}>
          <Text style={styles.clear}>{buttonString}</Text>
        </Pressable>
      </View>
    </View>
  )
}
