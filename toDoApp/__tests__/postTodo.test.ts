import { postTodoFunc } from '../src/store/todo/actions'

test('post todo uploads the item successfully and returns an id', async () => {
  const todo = { title: 'test', description: 'test', completed: true }
  const data = await postTodoFunc(todo)
  expect(data).toMatchObject(todo)
  expect(data).toHaveProperty('id')
})
