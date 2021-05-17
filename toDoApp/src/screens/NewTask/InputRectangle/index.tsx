import React from 'react'
import { View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Color } from '../../../styles/Pallete'
import { styles } from './styles'

export const InputRectangle: React.FC<{}> = () => {
  //TODO: como hago para que el estado tenga titulo + desc?
  //const [text, setText] = useState('')
  return (
    <View style={styles.inputRectangle}>
      <TextInput
        style={styles.title}
        placeholder="Task title"
        placeholderTextColor={Color.whiteThree}
        //onChangeText={text => setText(text)}
      />
      <View style={styles.titleUnderline} />
      <TextInput
        style={styles.description}
        placeholder="Task description" //aca tendria que ver como hacer que  se escriba abajko
        placeholderTextColor={Color.whiteThree}
      />
    </View>
  )
}
