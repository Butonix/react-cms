import React, { PropTypes } from 'react'
import classNames from 'classnames'

const FieldComponent = (props) => {

  const {
    input,
    label,
    type,
    helperText,
    placeholder,
    meta: {
      touched,
      error,
      warning
    }
  } = props

  const classes = classNames({
    'field-group': true,
    'field-error': error,
    'filed-warning': warning
  })
  
  return (
      <div className={classes}>
        <label>{label}</label>
        <div className="field-input">
          <input {...input} placeholder={placeholder || label} type={type}/>
          {(helperText && <div className="helper-text">{helperText}</div>)}
          {touched && ((error && <div className="error-message">{error}</div>) || (warning && <div className="error-message">{warning}</div>))}
        </div>
      </div>
  )
}

FieldComponent.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  helperText: PropTypes.oneOfType([ PropTypes.string, PropTypes.node ]),
  placeholder: PropTypes.string,
  meta: PropTypes.object
}

FieldComponent.defaultProps = {
  input: {},
  label: '',
  type: 'text',
  helperText: null,
  placeholder: null,
  meta: {}
}

export default FieldComponent

