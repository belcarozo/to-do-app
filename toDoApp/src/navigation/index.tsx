import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home, homeHeader } from '../screens/Home'
import { NewTask, newTaskHeader } from '../screens/NewTask'
import { Details, detailsHeader } from '../screens/Details'
import { RootStackParamList } from './types'
import { routes } from './routes'

export const AppContainer = () => {
  const Stack = createStackNavigator<RootStackParamList>()

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
