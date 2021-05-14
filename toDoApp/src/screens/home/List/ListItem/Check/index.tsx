import React from 'react'
import { Pressable, Image, View } from 'react-native'

export const Check: React.FC<{
  value: boolean
  onPress: (id: number) => () => void
  id: number
}> = ({ value, onPress, id }) => {
  return (
    <View>
      <Pressable onPress={onPress(id)}>
        <Image
          source={
            value
              ? require('../../../../../assets/images/iconCheckboxActive.png')
              : require('../../../../../assets/images/iconCheckboxInactive.png')
          }
        />
      </Pressable>
    </View>
  )
}
