import React from 'react'
import { Pressable, SafeAreaView, Text, View } from 'react-native'
import { routes } from '../../navigation/routes'
import { InputRectangle } from './InputRectangle'
import { constants } from './strings'
import { styles } from './styles'
import { newTaskProps } from './types'

export const newTaskHeader = ({ navigation }: newTaskProps) => ({
  title: constants.newTaskTitle,
  headerStyle: styles.header,
  headerTintColor: Color.almostWhite,
  headerRight: () => (
    <Pressable
      style={styles.button}
      onPress={() => navigation.navigate(routes.newTask)}>
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
  return (
    <SafeAreaView style={styles.container}>
      <InputRectangle />
      <View style={styles.separator} />
    </SafeAreaView>
  )
}
