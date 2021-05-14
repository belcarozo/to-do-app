import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../screens/Home'
import { styles } from './styles'
import { Color } from '../styles/Pallete'
import { Pressable, Text } from 'react-native'
import { NewTask } from '../screens/NewTask'
import { Details } from '../screens/Details'

const Stack = createStackNavigator()

export const AppContainer = () => {
  const header = ({ navigation }) => ({
    //como tipar esto?
    title: 'Todo',
    headerStyle: styles.header,
    headerTintColor: Color.almostWhite,
    headerRight: () => (
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('NewTask')}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    ),
  })

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={header} />
      <Stack.Screen name="NewTask" component={NewTask} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  )
}
