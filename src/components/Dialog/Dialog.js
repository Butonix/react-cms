import React, { PropTypes } from 'react'

import { Button } from 'components/Buttons'
import './Dialog.scss'

const Dialog = (props) => {
  const { children, onClose, title, actions } = props
  const headerItem = props.headerItem
      || (
        <div className="list">
          <div className="modal-dialog-title">{title}</div>
          <Button onClick={onClose} icon>close</Button>
        </div>
      )

  let actionIdx = 0;
  const footerItem = actions && (
          <div className="list">
            {
              actions.map((act) => {
                actionIdx += 1
                return <div className="list-item" key={`action_${actionIdx}`}>{act}</div>
              })
            }
          </div>
      )

  return (
      <div className="modal-dialog">
        <div className="modal-dialog-container">
            <div className="modal-dialog-header">{ headerItem }</div>
            <div className="modal-dialog-body">
              {children}
            </div>
            { footerItem && <div className="modal-dialog-footer">{ footerItem }</div> }
        </div>
      </div>

  )
}

Dialog.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.oneOfType([ PropTypes.node, PropTypes.string ]),
  actions: PropTypes.array,
  footerItem: PropTypes.node,
  headerItem: PropTypes.node,
  onClose: PropTypes.func
}

Dialog.defaultProps = {
  headerItem: null,
  footerItem: null,
  title: '',
  actions: [],
  onClose: () => { console.warn('Dialog close not handled!') }
}

export default Dialog