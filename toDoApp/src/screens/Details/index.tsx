import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { styles } from './styles'
import { TextRectangle } from './TextRectangle'
import { detailsProps } from './types'
import { constants } from './strings'
import { Color } from '../../styles/Pallete'

export const detailsHeader = () => ({
  title: constants.detailsTitle,
  headerStyle: styles.header,
  headerTintColor: Color.almostWhite,
})

export const Details: React.FC<detailsProps> = ({ route, navigation }) => {
  const { title, subtitle, checked, id } = route.params
  navigation.setOptions({})
  return (
    <SafeAreaView style={styles.container}>
      <TextRectangle
        title={title}
        description={subtitle}
        checked={checked}
        id={id}
        navigation={navigation}
      />
      <View style={styles.separator} />
    </SafeAreaView>
  )
}
