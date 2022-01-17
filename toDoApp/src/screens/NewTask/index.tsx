import React, { useLayoutEffect, useState } from 'react'
import {
  Alert,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { routes } from '../../navigation/routes'
import { postTodo } from '../../store/todo/actions'
import { Color } from '../../styles/Pallete'
import { strings } from './strings'
import { styles } from './styles'
import { NewTaskProps } from './types'

export const NewTask: React.FC<NewTaskProps> = ({ navigation }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    navigation.setOptions({
      title: strings.newTaskTitle,
      headerStyle: styles.header,
      headerTintColor: Color.almostWhite,
      headerRight: () => (
        <Pressable style={styles.button} onPress={onPressSave}>
          <Text style={styles.buttonText}>{strings.save}</Text>
        </Pressable>
      ),
      headerLeft: () => (
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate(routes.home)}>
          <Text style={styles.buttonText}>{strings.cancel}</Text>
        </Pressable>
      ),
    })
  })

  const onPressSave = () => {
    const newTodo = {
      title: title,
      description: description,
      completed: false,
    }
    if (title !== '' && description !== '') {
      navigation.goBack()
      dispatch(postTodo(newTodo))
    } else if (title === '' && description === '') {
      Alert.alert(strings.invalidTitleAndDescriptionError)
    } else if (title === '') {
      Alert.alert(strings.invalidTitleError)
    } else {
      Alert.alert(strings.invalidDescriptionError)
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputRectangle}>
        <TextInput
          style={styles.title}
          placeholder={strings.taskTitle}
          placeholderTextColor={Color.whiteThree}
          onChangeText={setTitle}
          value={title}
        />
        <View style={styles.titleUnderline} />
        <TextInput
          style={styles.description}
          placeholder={strings.taskDescription}
          placeholderTextColor={Color.whiteThree}
          onChangeText={setDescription}
          value={description}
          multiline={true}
        />
      </View>
      <View style={styles.separator} />
    </SafeAreaView>
  )
}
