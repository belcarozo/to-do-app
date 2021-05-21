import React, { useState } from 'react'
import { Pressable, SafeAreaView, Text, TextInput, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { routes } from '../../navigation/routes'
import { addTodo } from '../../store/todo'
import { Color } from '../../styles/Pallete'
import { constants } from './strings'
import { styles } from './styles'
import { newTaskProps } from './types'

var newId = 0

export const NewTask: React.FC<newTaskProps> = ({ navigation }) => {
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const dispatch = useDispatch()

  navigation.setOptions({
    title: constants.newTaskTitle,
    headerStyle: styles.header,
    headerTintColor: Color.almostWhite,
    headerRight: () => (
      <Pressable style={styles.button} onPress={onPressSave}>
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

  const onPressSave = () => {
    navigation.navigate(routes.home)
    dispatch(
      addTodo({ title: title, subtitle: subtitle, checked: false, id: newId }),
    )
    newId += 1
  }
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
          multiline={true}
        />
      </View>
      <View style={styles.separator} />
    </SafeAreaView>
  )
}
