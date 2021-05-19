import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../navigation/types'

export type NewTaskScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'NewTask'
>
export type newTaskProps = {
  navigation: NewTaskScreenNavigationProp
}
