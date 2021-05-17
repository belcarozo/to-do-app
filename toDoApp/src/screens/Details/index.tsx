import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { styles } from './styles'
import { TextRectangle } from './TextRectangle'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../navigation/types'

type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Details'
>

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>

type Props = {
  route: DetailsScreenRouteProp
  navigation: DetailsScreenNavigationProp
}

export const Details: React.FC<Props> = ({ route, navigation }) => {
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
