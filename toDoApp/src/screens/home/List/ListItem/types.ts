import { StackNavigationProp } from '@react-navigation/stack'
import {
  HomeScreenNavigationProp,
  RootStackParamList,
} from '../../../../navigation/types'

type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Details'
>

export interface ListItemInterface {
  title: string
  subtitle: string
  checked: boolean
  id: number
  onPress: (id: number) => () => void
  navigation: DetailsScreenNavigationProp | HomeScreenNavigationProp
}
