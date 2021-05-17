import React, { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { constants } from '../../../common/constants'
import { styles } from './styles'

export const TextRectangle: React.FC<{
  title: string
  description: string
  checked: boolean
  id: number
  navigation: any
}> = ({ title, description, checked, id, navigation }) => {
  const [isDone, changeState] = useState(checked)
  const showState = isDone ? constants.done : constants.notDone
  return (
    <View style={styles.textRectangle}>
      <Text style={styles.state}>{showState}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.center}>
        <Pressable
          onPress={() => {
            changeState(!isDone)
            navigation.navigate(routes.home, { id: id, checked: isDone })
          }}>
          <Text style={styles.clear}>MARK AS DONE</Text>
        </Pressable>
      </View>
    </View>
  )
}
