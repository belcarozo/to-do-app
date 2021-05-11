import React, { useState } from 'react'
import { Pressable, Image, View } from 'react-native'

export const Check = () => {
  const [checked, updateState] = useState(false)
  return (
    <View>
      <Pressable onPress={() => updateState(!checked)}>
        <Image
          source={
            checked
              ? require('../../../../../assets/images/iconCheckboxActive.png')
              : require('../../../../../assets/images/iconCheckboxInactive.png')
          }
        />
      </Pressable>
    </View>
  )
}
