import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../screens/home'

const Stack = createStackNavigator()

export const AppContainer = () => (
  <Stack.Navigator>
    <Stack.Screen name="home" component={Home} />
  </Stack.Navigator>
)
