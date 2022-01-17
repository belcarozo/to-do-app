import React from 'react'
import { shallow } from 'enzyme'
import { todoid } from '../src/common/testTodo'
import { List } from '../src/screens/Home/List'

describe('Rendering list', () => {
  it('should match to snapshot', () => {
    const component = shallow(<List list={[todoid]} renderItem={jest.fn()} />)
    expect(component).toMatchSnapshot()
  })
})
