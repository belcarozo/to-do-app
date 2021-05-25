import { createSelector } from 'reselect'
import { RootState } from '..'
import { TodoState } from './types'

const selectTodoStateTree = (state: RootState): TodoState => state.todo

export const selectList = createSelector(
  selectTodoStateTree,
  (state) => state.value,
)

export const selectTodo = createSelector(
  selectTodoStateTree,
  (state) => state.actual,
)
