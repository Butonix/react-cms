import React, { PropTypes } from 'react'
import classNames from 'classnames'
import './Buttons.scss'

const FloatingButton = (props) => {

  const commonClasses = [
    'lp-button',
    'lp-button--floating'
  ]

  const editClasses = classNames(
      ...commonClasses,
      { 'primary': !props.editing },
      { 'secondary': props.editing }
  )

  const cancelClasses = classNames(
      ...commonClasses,
      'primary'
  )

  return (
      <div className="floating-actions">
        { props.editing && (
            <button className={ cancelClasses } onClick={props.onCancel}>
              <i className="material-icons">cancel</i>
            </button>
          )
        }
        <button className={ editClasses } onClick={props.onClick}>
          <i className="material-icons">{props.editing ? 'done' : 'edit'}</i>
        </button>
      </div>
  );
}

FloatingButton.propTypes = {
  editing: PropTypes.bool,
  onClick: PropTypes.func,
  onCancel: PropTypes.func
}

FloatingButton.defaultProps = {
  editing: false,
  onClick: () => { console.log('click') },
  onCancel: () => { console.log('cancel') }
}

export default FloatingButton