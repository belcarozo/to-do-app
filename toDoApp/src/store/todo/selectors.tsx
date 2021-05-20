import { createSelector } from 'reselect'
import { RootState } from '..'
import { todoState } from './types'

//funciones que le paso al useSelector tipos con mayus
const selectTodoStateTree = (state: RootState): todoState => state.todo

export const selectList = createSelector(
  selectTodoStateTree,
  (state) => state.value,
)
