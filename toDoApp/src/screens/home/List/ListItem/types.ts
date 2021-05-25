import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../navigation/types'
import { HomeScreenNavigationProp } from '../../types'

type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Details'
>

export interface ListItemInterface {
  title: string
  subtitle: string
  checked: boolean
  id: number
  onPress: (id: number) => () => { payload: any; type: string }
  navigation: HomeScreenNavigationProp
}
