import React, { useState } from 'react'
import { Pressable, SafeAreaView, Text, TextInput, View } from 'react-native'
import { routes } from '../../navigation/routes'
import { Color } from '../../styles/Pallete'
import { constants } from './strings'
import { styles } from './styles'
import { newTaskProps } from './types'

// const onPressSave = ({ navigation }: newTaskProps) => {
//   navigation.navigate(routes.home)

// }

export const newTaskHeader = ({ navigation }: newTaskProps) => ({
  title: constants.newTaskTitle,
  headerStyle: styles.header,
  headerTintColor: Color.almostWhite,
  headerRight: () => (
    <Pressable
      style={styles.button}
      onPress={() => navigation.navigate(routes.home)}>
      <Text style={styles.buttonText}>{constants.save}</Text>
    </Pressable>
  ),
  headerLeft: () => (
    <Pressable
      style={styles.button}
      onPress={() => navigation.navigate(routes.home)}>
      <Text style={styles.buttonText}>{constants.cancel}</Text>
    </Pressable>
  ),
})
export const NewTask: React.FC<{}> = () => {
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputRectangle}>
        <TextInput
          style={styles.title}
          placeholder={constants.taskTitle}
          placeholderTextColor={Color.whiteThree}
          onChangeText={setTitle}
          value={title}
        />
        <View style={styles.titleUnderline} />
        <TextInput
          style={styles.description}
          placeholder={constants.taskDescription}
          placeholderTextColor={Color.whiteThree}
          onChangeText={setSubtitle}
          value={subtitle}
        />
      </View>
      <View style={styles.separator} />
    </SafeAreaView>
  )
}
