import { createSlice } from '@reduxjs/toolkit'
import { Alert } from 'react-native'
import { clear, check, add, getTodos, postTodo } from './actions'
import { TodoState } from './types'

const initialState: TodoState = {
  value: [],
  error: undefined,
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
      Alert.alert('Oh! There was an error')
    })
  },
})

export const { addTodo, checkUncheck, clearAllDone } = todoSlice.actions

export default todoSlice.reducer
