import { todoState } from './types'

export const actions = {}

export const checkAllDone = (state: todoState) => {
  state.value.filter((item) => !item.checked)
}
