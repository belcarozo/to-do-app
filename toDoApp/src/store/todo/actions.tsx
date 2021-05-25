import { ActionType, TodoState } from './types'

export const clear = (state: TodoState) => {
  state.value = state.value.filter((item) => !item.checked)
}

export const check = (state: TodoState, action: ActionType) => {
  const index = state.value.findIndex((elem) => action.payload === elem.id)
  state.value[index].checked = !state.value[index].checked
}

export const add = (state: TodoState, action: ActionType) => {
  state.value.push(action.payload)
}
