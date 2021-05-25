import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../navigation/types'

export interface ListItemType {
  title: string
  description: string
  completed: boolean
  id: number
  created_at: string
  updated_at: string
}
export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>
export type HomeProps = {
  navigation: HomeScreenNavigationProp
}
