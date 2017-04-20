import React from 'react'
import { Field, reduxForm } from 'redux-form'

import validate from './validate'
import { FieldComponent } from 'components/Forms'

const LoginForm = (props) => {
  const { handleSubmit } = props
  return (
      <form onSubmit={handleSubmit} className="lp-form login-form">
        <Field name="email" component={FieldComponent} type="email" label="Email" placeholder="email ex. you@youremail.com" />
        <Field name="password" component={FieldComponent} type="password" label="Password"  placeholder="password min 6 digit"/>
      </form>
  )
}

export default reduxForm({
  form: 'login', // a unique name for this form
  validate
})(LoginForm)
