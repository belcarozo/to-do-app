import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { styles } from './styles'
import { Check } from './Check/index'
import { ListItemInterface } from './types'

export const ListItem: React.FC<ListItemInterface> = ({
  title,
  description,
  completed,
  id,
  onPress,
  onPressTitle,
}) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.pressableTitle}
        onPress={onPressTitle(title, description, completed, id)}>
        <View style={styles.data}>
          <View style={styles.textSection}>
            <Text style={styles.titleFormat}>{title}</Text>
            <View style={styles.description}>
              <Text style={styles.descriptionFormat}>{description}</Text>
            </View>
          </View>
          <View style={styles.checkboxSection}>
            <Check value={completed} onPress={onPress} id={id} />
          </View>
        </View>
        <View style={styles.separator} />
      </Pressable>
    </View>
  )
}
