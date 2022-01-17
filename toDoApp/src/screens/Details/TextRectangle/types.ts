import { DetailsScreenNavigationProp } from '../types'

export interface TextRectangleInterface {
  id: number
  navigation: DetailsScreenNavigationProp
  showState: string
  title: string
  description: string
  onPress: () => void
  buttonString: string
}
