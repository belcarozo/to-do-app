import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'
import { todoState } from './types'

const initialState: todoState = {
  value: []
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
    clearAllDone: (state) => {
      state.value.filter((item) => !item.checked)
    }
  }
})

export const { addTodo, checkUncheck, clearAllDone } = todoSlice.actions

export const selectTodo = (state: RootState) => state.todo.value

export default todoSlice.reducer