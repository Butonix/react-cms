import React, { Component, PropTypes } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { submit, reduxForm } from 'redux-form'
import { Button } from 'components/Buttons'
import Loading from 'components/Loading'

class RemoteSubmitButton extends Component {
  render() {
    // console.log('remote button', this.props)

    const { dispatch, submitting, submitSucceeded, formId } = this.props

    const handleSubmit = () => {
      return dispatch(submit(formId))
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

RemoteSubmitButton.propTypes = {
  formId: PropTypes.string.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    form: ownProps.formId,
    // other props...
  }
}

const ComponentForm = compose(
    connect(mapStateToProps),
    reduxForm({
      // form got from own props
    })
)(RemoteSubmitButton)
export default ComponentForm