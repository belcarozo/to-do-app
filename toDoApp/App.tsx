import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Provider } from 'react-redux'
import { navigationRef } from './src/common/rootNavigation'
import { AppContainer } from './src/navigation'
import { store } from './src/store'

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <AppContainer />
      </NavigationContainer>
    </Provider>
  )
}

export default App
