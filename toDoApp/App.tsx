import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { AppContainer } from './src/navigation'

const App = () => {
  return (
    <NavigationContainer>
      <AppContainer />
    </NavigationContainer>
  )
}

export default App
