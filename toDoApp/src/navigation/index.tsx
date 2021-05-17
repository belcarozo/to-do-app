import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../screens/Home'
import { styles } from './styles'
import { Color } from '../styles/Pallete'
import { Pressable, Text } from 'react-native'
import { NewTask } from '../screens/NewTask'
import { Details } from '../screens/Details'
import { homeProps, newTaskProps, RootStackParamList } from './types'

export const AppContainer = () => {
  const Stack = createStackNavigator<RootStackParamList>()

  const homeHeader = ({ navigation }: homeProps) => ({
    title: 'Todo',
    headerStyle: styles.header,
    headerTintColor: Color.almostWhite,
    headerRight: () => (
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('NewTask')}>
        <Text style={styles.addButton}>+</Text>
      </Pressable>
    ),
  })

  const newTaskHeader = ({ navigation }: newTaskProps) => ({
    title: 'New task',
    headerStyle: styles.header,
    headerTintColor: Color.almostWhite,
    headerRight: () => (
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('NewTask')}>
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>
    ),
    headerLeft: () => (
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Cancel</Text>
      </Pressable>
    ),
  })

  const detailsHeader = () => ({
    title: 'Details',
    headerStyle: styles.header,
    headerTintColor: Color.almostWhite,
  })

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={homeHeader} />
      <Stack.Screen
        name="NewTask"
        component={NewTask}
        options={newTaskHeader}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={detailsHeader}
      />
    </Stack.Navigator>
  )
}
