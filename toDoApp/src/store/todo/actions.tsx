import { createAsyncThunk } from '@reduxjs/toolkit'
import { ActionType, TodoState } from './types'
import axios from 'axios'

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
  const result = await axios.get(
    'https://rn-training-backend.herokuapp.com/todos',
  )
  const { data } = result
  return data
})

export const postTodo = createAsyncThunk(
  'todos/postTodo',
  async (todo: any) => {
    const result = await axios.post(
      'https://rn-training-backend.herokuapp.com/todos',
      todo,
    )
    return result
  },
)

export const getTodoByID = createAsyncThunk(
  'todos/getTodoByID',
  async (id: number) => {
    const result = await axios.get(
      `https://rn-training-backend.herokuapp.com/todos/${id}`,
    )
    const { data } = result
    return data
  },
)
