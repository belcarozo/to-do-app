import { createSlice } from '@reduxjs/toolkit'
import { Alert } from 'react-native'
import {
  clear,
  getTodos,
  postTodo,
  getTodoByID,
  updateTodo,
  deleteTodo,
} from './actions'
import { strings } from './strings'
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
    clearAllDone: clear,
  },
  extraReducers: (builder) => {
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.value = action.payload
    })
    builder.addCase(getTodos.rejected, (state) => {
      state.error = 'error'
      showError()
    })
    builder.addCase(postTodo.fulfilled, (state, action) => {
      state.value.push(action.payload)
    })
    builder.addCase(postTodo.rejected, (state) => {
      state.error = 'error'
      showError()
    })
    builder.addCase(getTodoByID.fulfilled, (state, action) => {
      state.actual = action.payload
    })
    builder.addCase(getTodoByID.rejected, (state) => {
      state.actual = undefined
      showError()
    })
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      const index = state.value.findIndex(
        (elem) => action.payload.id === elem.id,
      )
      state.value[index].completed = !state.value[index].completed
    })
    builder.addCase(updateTodo.rejected, (state) => {
      state.error = 'error'
      showError()
    })
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      const index = state.value.findIndex((elem) => action.payload === elem.id)
      state.value.splice(index, 1)
    })
    builder.addCase(deleteTodo.rejected, (state) => {
      state.error = 'error'
      showError()
    })
  },
})

const showError = () => {
  Alert.alert(strings.error)
}
export const { clearAllDone } = todoSlice.actions

export default todoSlice.reducer
