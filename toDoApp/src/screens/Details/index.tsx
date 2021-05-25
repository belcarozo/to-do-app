import React, { useLayoutEffect } from 'react'
import { SafeAreaView, View } from 'react-native'
import { styles } from './styles'
import { TextRectangle } from './TextRectangle'
import { detailsProps } from './types'
import { strings } from './strings'
import { Color } from '../../styles/Pallete'

export const Details: React.FC<detailsProps> = ({ route, navigation }) => {
  const { title, description, id } = route.params

  useLayoutEffect(() => {
    navigation.setOptions({
      title: strings.detailsTitle,
      headerStyle: styles.header,
      headerTintColor: Color.almostWhite,
    })
  })

  return (
    <SafeAreaView style={styles.container}>
      <TextRectangle
        title={title}
        description={description}
        id={id}
        navigation={navigation}
      />
      <View style={styles.separator} />
    </SafeAreaView>
  )
}
