import React from 'react'
import { shallow } from 'enzyme'

import Button from './Button'

describe('Button', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Button>Content</Button>)
  })

  it('renders a button with default attributes', () => {
    expect(wrapper.hasClass('btn')).toBeTruthy()
    expect(wrapper.hasClass('btn-default')).toBeTruthy()
  })

  it('renders a content within the button', () => {
    expect(wrapper.text()).toEqual('Content')
  })

  describe('theme attribute', () => {
    it('adds class name by given theme name', () => {
      const themes = ['primary', 'success', 'info', 'warning', 'danger']

      themes.forEach(theme => {
        wrapper = shallow(<Button theme={theme}>Content</Button>)
        expect(wrapper.hasClass(`btn-${theme}`)).toBeTruthy()
      })
    })
  })

  describe('size attribute', () => {
    it('adds class name by given size', () => {
      wrapper = shallow(<Button size="large">Content</Button>)
      expect(wrapper.hasClass('btn-lg')).toBeTruthy()

      wrapper = shallow(<Button size="small">Content</Button>)
      expect(wrapper.hasClass('btn-sm')).toBeTruthy()

      wrapper = shallow(<Button size="xsmall">Content</Button>)
      expect(wrapper.hasClass('btn-xs')).toBeTruthy()
    })
  })
})
