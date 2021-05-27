import { getTodosFunc } from '../src/store/todo/actions'

test('get todos from backend returns an array', async () => {
  const data = await getTodosFunc()
  expect(data).toEqual(expect.arrayContaining([]))
})
