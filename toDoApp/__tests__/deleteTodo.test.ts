import { deleteTodoFunc, postTodoFunc } from '../src/store/todo/actions'
import { todo } from '../src/common/testTodo'

test('todo gets successfully deleted', async () => {
  const result = await postTodoFunc(todo)
  todo.completed = !todo.completed
  const data = await deleteTodoFunc(result.id)
  expect(data).toEqual(result.id)
})
