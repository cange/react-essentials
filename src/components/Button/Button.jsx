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

class Button extends React.Component {
  static sizes = {
    LARGE: 'btn-lg',
    DEFAULT: '',
    SMALL: 'btn-sm',
    XSMALL: 'btn-xs',
  }

  static themes = {
    DEFAULT: 'btn-default',
    PRIMARY: 'btn-primary',
    SUCCESS: 'btn-success',
    INFO:   'btn-info',
    WARNING: 'btn-warning',
    DANGER: 'btn-danger',
  }

  render() {
    const { size, theme } = this.props
    const wrapperClasses = classNames(
      'btn',
      Button.sizes[size.toUpperCase()],
      Button.themes[theme.toUpperCase()],
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
