import { createAsyncThunk } from '@reduxjs/toolkit'
import { ActionType, TodoState } from './types'

export const clear = (state: TodoState) => {
  state.value = state.value.filter((item) => !item.completed)
}

export const check = (state: TodoState, action: ActionType) => {
  const index = state.value.findIndex((elem) => action.payload === elem.id)
  state.value[index].completed = !state.value[index].completed
}

export const add = (state: TodoState, action: ActionType) => {
  state.value.push(action.payload)
}

export const getTodos = createAsyncThunk('todos/getTodos', async () => {
  const result = await fetch('https://rn-training-backend.herokuapp.com/todos')
  return result.json()
})

export const postTodo = createAsyncThunk(
  'todos/postTodo',
  async (todo: any) => {
    console.log('hola soy el todo', todo)
    const result = await fetch(
      'https://rn-training-backend.herokuapp.com/todos',
      { method: 'POST', body: todo },
    )
    console.log('hola pepe', result)
    return result.json()
  },
)
