import { postTodoFunc } from '../src/store/todo/actions'
import { todo } from '../src/common/testTodo'

test('post todo uploads the item successfully and returns an id', async () => {
  const data = await postTodoFunc(todo)
  expect(data).toMatchObject(todo)
  expect(data).toHaveProperty('id')
})
