import React, { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { styles } from './styles'

export const TextRectangle: React.FC<{
  title: string
  description: string
  checked: boolean
  id: number
  //onPress: (id: number) => () => void
  navigation: any
}> = ({ title, description, checked, id, navigation }) => {
  const [isDone, changeState] = useState(checked)
  //const checkState = checked ? 'Done' : 'Not done'
  return (
    <View style={styles.textRectangle}>
      <Text style={styles.state}>{isDone ? 'Done' : 'Not done'}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.center}>
        <Pressable
          onPress={() => {
            changeState(!isDone)
            navigation.navigate('Home', { id: id, checked: isDone })
          }}>
          <Text style={styles.clear}>MARK AS DONE</Text>
        </Pressable>
      </View>
    </View>
  )
}
