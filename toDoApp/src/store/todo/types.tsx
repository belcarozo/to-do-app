import { ListItemType } from '../../screens/Home/types'
export interface TodoState {
  value: ListItemType[]
  error?: string
  actual?: ListItemType
}
export interface ActionType {
  payload: any
  type: string
}
export interface TodoAndID {
  todo: TodoDraft
  id: number
}

export type TodoDraft = Omit<ListItemType, 'id'>
