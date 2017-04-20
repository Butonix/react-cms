import React, { Component } from 'react'
import Dialog from 'components/Dialog'
import { Button } from 'components/Buttons'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


const containerStyle = {
  display: 'flex',
  flex: '1 1 100%',
  flexDirection: 'column',
  alignItems: 'center'
}

class DialogContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showDialog: false
    }
  }

  handleClick = (evt) => {
    const showDialog = this.state.showDialog
    this.setState({ showDialog: !showDialog })
  }

  render() {
    const { showDialog } = this.state
    console.log(showDialog)
    return (
        <div style={containerStyle}>
          <Button onClick={this.handleClick} primary={showDialog}>{ showDialog ? 'Close' : 'Open' }</Button>
          <ReactCSSTransitionGroup
              component="div"
              className=""
              transitionName="modal"
          >
          {
            showDialog
            && (
              <Dialog onClose={this.handleClick}>
                <div>
                  Dialog
                </div>
              </Dialog>
            )
          }
          </ReactCSSTransitionGroup>
        </div>
    )
  }
}

export default DialogContainer