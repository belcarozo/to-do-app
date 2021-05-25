import { createSlice } from '@reduxjs/toolkit'
import { clear, check, add } from './actions'
import { TodoState } from './types'

const initialState: TodoState = {
  value: [],
}
export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    addTodo: add,
    checkUncheck: check,
    clearAllDone: clear,
  },
})

export const { addTodo, checkUncheck, clearAllDone } = todoSlice.actions

export default todoSlice.reducer
