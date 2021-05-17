import { StackNavigationProp } from '@react-navigation/stack'

export type RootStackParamList = {
  Home: undefined
  NewTask: undefined
  Details: { title: string; subtitle: string; checked: boolean; id: number }
}

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>

export type NewTaskScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'NewTask'
>

export type homeProps = {
  navigation: HomeScreenNavigationProp
}

export type newTaskProps = {
  navigation: NewTaskScreenNavigationProp
}
