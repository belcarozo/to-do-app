export interface ListItemInterface {
  title: string
  description: string
  completed: boolean
  id: number
  onPress: (id: number) => () => { payload: any; type: string }
  onPressTitle: (
    title: string,
    description: string,
    completed: boolean,
    id: number,
  ) => () => void
}
