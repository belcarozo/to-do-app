import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../screens/Home'
import { styles } from './styles'
import { Color } from '../styles/Pallete'
import { Pressable, Text } from 'react-native'

const Stack = createStackNavigator()

export const AppContainer = () => {
  const header = {
    title: 'Todo',
    headerStyle: styles.header, //hmm esto va aca?
    headerTintColor: Color.almostWhite,
    headerRight: () => (
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    ),
  }

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={header} />
      {/* <Stack.Screen name="NewTask" component={NewTask} />
    <Stack.Screen name="Details" component={Details} /> */}
    </Stack.Navigator>
  )
}
