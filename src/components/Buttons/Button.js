import React, { PropTypes } from 'react'
import classNames from 'classnames'
import _ from 'lodash'
import './Buttons.scss'

const Button = (props) => {
  const {
    children,
    primary,
    secondary,
    onClick,
    icon,
    rightIcon,
    leftIcon,
    outline,
    className,
    disabled,
    htmlAttributes
  } = props

  const commonClasses = [
    'lp-button'
  ]

  if (className) {
    const customClasses = _.map(_.split(className, ' '), (c) => _.trim(c))
    commonClasses.push(...customClasses)
  }

  const editClasses = classNames(
      ...commonClasses,
      { 'disabled': disabled },
      { 'lp-button--icon': icon },
      { 'lp-button--outline': outline },
      { 'lp-button--primary': primary },
      { 'lp-button--secondary': secondary }
  )

  return (
    <button className={ editClasses } onClick={ onClick } { ...htmlAttributes }>
      {
        leftIcon && <i className="material-icons lp-button-icon--left">{ leftIcon }</i>
      }
      { icon
          ? <i className="material-icons">{ children }</i>
          : children
      }
      {
        rightIcon && <i className="material-icons lp-button-icon--right">{ rightIcon }</i>
      }
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.bool,
  rightIcon: PropTypes.string,
  leftIcon: PropTypes.string,
  outline: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  htmlAttributes: PropTypes.object
}

Button.defaultProps = {
  className: '',
  disabled: false,
  icon: false,
  rightIcon: null,
  leftIcon: null,
  outline: false,
  primary: false,
  secondary: false,
  htmlAttributes: {},
  onClick: () => { console.warn('Button click not handled!') }
}

export default Button