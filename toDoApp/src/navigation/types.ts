import { StackNavigationProp } from '@react-navigation/stack'

export type RootStackParamList = {
  Home: undefined
  NewTask: undefined
  Details: {
    title: string
    description: string
    completed: boolean
    id: number
  }
}

export type routesType = {
  home: keyof RootStackParamList
  newTask: keyof RootStackParamList
  details: keyof RootStackParamList
}

export type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Details'
>
