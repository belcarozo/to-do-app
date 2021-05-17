import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { styles } from './styles'
import { Check } from './Check/index'
import { ListItemInterface } from './types'
import { routes } from '../../../../common/constants'

export const ListItem: React.FC<ListItemInterface> = ({
  title,
  subtitle,
  checked,
  id,
  onPress,
  navigation,
}) => (
  <View style={styles.container}>
    <View style={styles.data}>
      <View style={styles.textSection}>
        <Pressable
          style={styles.pressableTitle}
          onPress={() =>
            navigation.navigate(routes.details, {
              title: title,
              subtitle: subtitle,
              checked: checked,
              id: id,
            })
          }>
          <Text style={styles.titleFormat}>{title}</Text>
        </Pressable>
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
