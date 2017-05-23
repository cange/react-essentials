import React from 'react'
import ReactDOM from 'react-dom'
import Button from './components/button/Button'

export {
  Button
}
const mount = document.querySelector('#mount')

ReactDOM.render(
  <div>
    <h1>Theme</h1>
    <Button>Default</Button>
    <Button theme="primary">Primary</Button>
    <Button theme="success">Success</Button>
    <Button theme="info">Success</Button>
    <Button theme="warning">Warning</Button>
    <Button theme="danger">Danger</Button>
    <h1>Sizes</h1>
    <Button size="large">Large</Button>
    <Button>Default</Button>
    <Button size="small">Small</Button>
    <Button size="xsmall">Extra Small</Button>
  </div>,
  mount
)
