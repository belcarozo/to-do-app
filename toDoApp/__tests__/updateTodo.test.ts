import { postTodoFunc, updateTodoFunc } from '../src/store/todo/actions'
import { todo } from '../src/common/testTodo'

test('todo gets updated when checked', async () => {
  const result = await postTodoFunc(todo)
  todo.completed = !todo.completed
  const data = await updateTodoFunc({ id: result.id, todo })
  expect(data.completed).toEqual(todo.completed)
})
