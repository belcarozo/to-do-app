import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../navigation/types'

export type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Details'
>

export type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>

export type detailsProps = {
  route: DetailsScreenRouteProp
  navigation: DetailsScreenNavigationProp
}
