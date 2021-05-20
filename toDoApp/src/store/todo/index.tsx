import { createSlice } from '@reduxjs/toolkit'
import { checkAllDone } from './actions'
import { todoState } from './types'

const initialState: todoState = {
  value: [],
}
export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload)
    },
    checkUncheck: (state, action) => {
      state.value[action.payload].checked = !state.value[action.payload].checked
    },
    clearAllDone: checkAllDone,
  },
})

export const { addTodo, checkUncheck, clearAllDone } = todoSlice.actions

export default todoSlice.reducer
