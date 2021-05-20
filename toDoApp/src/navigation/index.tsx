import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../screens/Home'
import { NewTask } from '../screens/NewTask'
import { Details } from '../screens/Details'
import { RootStackParamList } from './types'
import { routes } from './routes'

export const AppContainer = () => {
  const Stack = createStackNavigator<RootStackParamList>()

  return (
    <Stack.Navigator initialRouteName={routes.home}>
      <Stack.Screen name={routes.home} component={Home} />
      <Stack.Screen name={routes.newTask} component={NewTask} />
      <Stack.Screen name={routes.details} component={Details} />
    </Stack.Navigator>
  )
}
