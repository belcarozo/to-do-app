import { listItemType } from '../../screens/Home/types'

export interface TodoState {
  value: listItemType[]
}

export interface ActionType {
  payload: any
  type: string
}
