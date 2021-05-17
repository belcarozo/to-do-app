import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { InputRectangle } from './InputRectangle'
import { styles } from './styles'

export const NewTask: React.FC<{}> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <InputRectangle />
      <View style={styles.separator} />
    </SafeAreaView>
  )
}
