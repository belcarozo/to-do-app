import { getStateStrings } from '../src/screens/Details/TextRectangle'
import { strings } from '../src/screens/Details/TextRectangle/strings'

test('the string of the button if the element is completed', () => {
  const list = [{ title: 'hola', description: 'hola', completed: true, id: 0 }]
  const id = 0
  expect(getStateStrings(list, id)).toMatchObject({
    showState: strings.done,
    buttonString: strings.doneButton,
  })
})

test('the string of the button if the element is not completed', () => {
  const list = [{ title: 'hola', description: 'hola', completed: false, id: 0 }]
  const id = 0
  expect(getStateStrings(list, id)).toMatchObject({
    showState: strings.notDone,
    buttonString: strings.notDoneButton,
  })
})

test('the string of the button if the element is not valid', () => {
  const list = [{ title: 'hola', description: 'hola', completed: false, id: 0 }]
  const id = 1
  expect(getStateStrings(list, id)).toMatchObject({
    showState: strings.notDone,
    buttonString: strings.notDoneButton,
  })
})
