import { StackNavigationProp } from '@react-navigation/stack'

export type RootStackParamList = {
  Home: undefined
  NewTask: undefined
  Details: { title: string; subtitle: string; checked: boolean; id: number }
}

export type routesType = {
  home: keyof RootStackParamList
  newTask: keyof RootStackParamList
  details: keyof RootStackParamList
}

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>

export type NewTaskScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'NewTask'
>

export type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Details'
>

export type homeProps = {
  navigation: HomeScreenNavigationProp | DetailsScreenNavigationProp
}

export type newTaskProps = {
  navigation: NewTaskScreenNavigationProp
}
