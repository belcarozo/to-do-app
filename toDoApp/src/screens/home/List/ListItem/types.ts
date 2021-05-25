export interface ListItemInterface {
  title: string
  description: string
  completed: boolean
  id: number
  onPress: (title: string, description: string, id: number) => () => void
  onPressTitle: (
    title: string,
    description: string,
    completed: boolean,
    id: number,
  ) => () => void
}
