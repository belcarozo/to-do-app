import React from 'react'
import { shallow } from 'enzyme'
import { ClearAllDone } from '../src/screens/Home/ClearAllDone'

describe('Rendering new task', () => {
  it('should match to snapshot', () => {
    const component = shallow(<ClearAllDone clearDone={jest.fn()} />)
    expect(component).toMatchSnapshot()
  })
})
