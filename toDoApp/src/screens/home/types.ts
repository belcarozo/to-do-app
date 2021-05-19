import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../navigation/types'

export interface listItemType {
  title: string
  subtitle: string
  checked: boolean
  id: number
}
export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>
export type homeProps = {
  navigation: HomeScreenNavigationProp
}
