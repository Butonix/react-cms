import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submit, reduxForm } from 'redux-form'
import { Button } from 'components/Buttons'
import Loading from 'components/Loading'

class RemoteSubmitButton extends Component {
  render() {
    console.log('remote button', this.props)

    const {dispatch, submitting, submitSucceeded} = this.props

    const handleSubmit = () => {
      return dispatch(submit('login'))
    }

    return (
      (submitting || submitSucceeded) ? (
        <Loading outline/>
      ) : (
        <Button
            className="login-form-submit lp-button--big"
            primary
            rightIcon="send"
            onClick={handleSubmit}>Login</Button>
      )
    )
  }
}

const ComponentForm = reduxForm({
  form: 'login'  // a unique identifier for this form
})(RemoteSubmitButton)
export default connect()(ComponentForm)