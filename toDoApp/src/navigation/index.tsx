import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../screens/Home'
import { styles } from './styles'
import { Color } from '../styles/Pallete'
import { Pressable, Text } from 'react-native'
import { NewTask } from '../screens/NewTask'
import { Details } from '../screens/Details'
import { homeProps, newTaskProps, RootStackParamList } from './types'
import { constants, routes } from '../common/constants'

export const AppContainer = () => {
  const Stack = createStackNavigator<RootStackParamList>()

  const homeHeader = ({ navigation }: homeProps) => ({
    title: constants.homeTitle,
    headerStyle: styles.header,
    headerTintColor: Color.almostWhite,
    headerRight: () => (
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate(routes.newTask)}>
        <Text style={styles.addButton}>+</Text>
      </Pressable>
    ),
  })

  const newTaskHeader = ({ navigation }: newTaskProps) => ({
    title: constants.newTaskTitle,
    headerStyle: styles.header,
    headerTintColor: Color.almostWhite,
    headerRight: () => (
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate(routes.newTask)}>
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>
    ),
    headerLeft: () => (
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate(routes.home)}>
        <Text style={styles.buttonText}>Cancel</Text>
      </Pressable>
    ),
  })

  const detailsHeader = () => ({
    title: constants.detailsTitle,
    headerStyle: styles.header,
    headerTintColor: Color.almostWhite,
  })

  return (
    <Stack.Navigator initialRouteName={routes.home}>
      <Stack.Screen name={routes.home} component={Home} options={homeHeader} />
      <Stack.Screen
        name={routes.newTask}
        component={NewTask}
        options={newTaskHeader}
      />
      <Stack.Screen
        name={routes.details}
        component={Details}
        options={detailsHeader}
      />
    </Stack.Navigator>
  )
}
