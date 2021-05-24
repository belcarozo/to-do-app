import React from 'react'
import { View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { constants } from './strings'
import { Color } from '../../../styles/Pallete'
import { styles } from './styles'

export const InputRectangle: React.FC<{}> = () => {
  return (
    <View style={styles.inputRectangle}>
      <TextInput
        style={styles.title}
        placeholder={constants.taskTitle}
        placeholderTextColor={Color.whiteThree}
      />
      <View style={styles.titleUnderline} />
      <TextInput
        style={styles.description}
        placeholder={constants.taskDescription}
        placeholderTextColor={Color.whiteThree}
      />
    </View>
  )
}
