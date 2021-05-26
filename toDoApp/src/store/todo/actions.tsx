import { createAsyncThunk } from '@reduxjs/toolkit'
import { TodoDraft, TodoState } from './types'
import axios from 'axios'
import { goBack } from '../../common/rootNavigation'
import { ListItemType } from '../../screens/Home/types'

export const clear = (state: TodoState) => {
  state.value = state.value.filter((item) => !item.completed)
}

export const getTodos = createAsyncThunk<ListItemType[], {}>(
  'todos/getTodos',
  async () => {
    const result = await axios.get(
      'https://rn-training-backend.herokuapp.com/todos',
    )
    const { data } = result
    return data
  },
)

export const postTodo = createAsyncThunk<ListItemType, TodoDraft>(
  'todos/postTodo',
  async (todo) => {
    const result = await axios.post(
      'https://rn-training-backend.herokuapp.com/todos',
      todo,
    )
    const { data } = result
    return data
  },
)

export const getTodoByID = createAsyncThunk<ListItemType, number>(
  'todos/getTodoByID',
  async (id: number, thunkAPI) => {
    try {
      const result = await axios.get(
        `https://rn-training-backend.herokuapp.com/todos/${id}`,
      )
      const { data } = result
      return data
    } catch (error) {
      thunkAPI.rejectWithValue(error)
      goBack()
    }
  },
)

export const updateTodo = createAsyncThunk<
  ListItemType,
  { id: number; todo: TodoDraft }
>('todos/updateTodo', async ({ id, todo }) => {
  const result = await axios.put(
    `https://rn-training-backend.herokuapp.com/todos/${id}`,
    todo,
  )
  const { data } = result
  return data
})

export const deleteTodo = createAsyncThunk<number, number>(
  'todos/deleteTodo',
  async (id) => {
    await axios.delete(`https://rn-training-backend.herokuapp.com/todos/${id}`)
    return id
  },
)
