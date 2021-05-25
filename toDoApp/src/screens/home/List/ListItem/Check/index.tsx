import React from 'react'
import { Pressable, Image, View } from 'react-native'
import active from '../../../../../assets/images/iconCheckboxActive.png'
import inactive from '../../../../../assets/images/iconCheckboxInactive.png'

export const Check: React.FC<{
  value: boolean
  onPress: (id: number) => () => { payload: any; type: string }
  id: number
}> = ({ value, onPress, id }) => {
  const checkBoxImage = value ? active : inactive

  return (
    <View>
      <Pressable onPress={onPress(id)}>
        <Image source={checkBoxImage} />
      </Pressable>
    </View>
  )
}
