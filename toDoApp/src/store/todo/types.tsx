import { ListItemType } from '../../screens/Home/types'

export interface TodoState {
  value: ListItemType[]
  error?: string
}

export interface ActionType {
  payload: any
  type: string
}
