import React from 'react'
import { Pressable, Image, View } from 'react-native'
import active from '../../../../../assets/images/iconCheckboxActive.png'
import inactive from '../../../../../assets/images/iconCheckboxInactive.png'

export const Check: React.FC<{
  title: string
  description: string
  completed: boolean
  onPress: (
    title: string,
    description: string,
    id: number,
    completed: boolean,
  ) => () => void
  id: number
}> = ({ title, description, onPress, id, completed }) => {
  const checkBoxImage = completed ? active : inactive

  return (
    <View>
      <Pressable onPress={onPress(title, description, id, completed)}>
        <Image source={checkBoxImage} />
      </Pressable>
    </View>
  )
}
