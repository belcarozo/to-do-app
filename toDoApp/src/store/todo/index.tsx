import { createSlice } from '@reduxjs/toolkit'
import { Alert } from 'react-native'
import { clear, check, add, getTodos, postTodo, getTodoByID } from './actions'
import { TodoState } from './types'

const initialState: TodoState = {
  value: [],
  error: undefined,
  actual: undefined,
}
export const todoSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo: add,
    checkUncheck: check,
    clearAllDone: clear,
  },
  extraReducers: (builder) => {
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.value = action.payload
    })
    builder.addCase(getTodos.rejected, (state) => {
      state.error = 'error'
    })
    builder.addCase(postTodo.rejected, (state) => {
      state.error = 'error'
      Alert.alert('Oh no! There was an error')
    })
    builder.addCase(getTodoByID.fulfilled, (state, action) => {
      state.actual = action.payload
    })
  },
})

export const { addTodo, checkUncheck, clearAllDone } = todoSlice.actions

export default todoSlice.reducer
