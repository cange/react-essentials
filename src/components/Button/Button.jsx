import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import style from './button.scss'

const propTypes = {
  /**
   * Describes the size of the button.
   */
  size: PropTypes.string,
  /**
   * Describes the colors of the button.
   */
  theme: PropTypes.string
}

const defaultProps = {
  size: 'default',
  theme: 'default'
}

const SIZES = {
  large: 'btn-lg',
  default: '',
  small: 'btn-sm',
  xsmall: 'btn-xs',
}

const THEMES = {
  default: 'btn-default',
  primary: 'btn-primary',
  success: 'btn-success',
  info: 'btn-info',
  warning: 'btn-warning',
  danger: 'btn-danger',
}

class Button extends React.Component {
  render() {
    const { size, theme } = this.props
    const wrapperClasses = classNames(
      'btn',
      SIZES[size],
      THEMES[theme],
    )

    return (
      <button className={wrapperClasses}>
        {this.props.children}
      </button>
    )
  }
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button
