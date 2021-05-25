import { ListItemType } from '../../screens/Home/types'

export interface TodoState {
  value: ListItemType[]
  error?: string
}

export interface ActionType {
  payload: any
  type: string
}

export interface TodoPostType {
  title: string
  description: string
  completed: boolean
}
