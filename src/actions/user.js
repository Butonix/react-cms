const USER = {
  LOGIN_REQUESTED: 'USER.LOGIN_REQUESTED',
  LOGIN_RESOLVED: 'USER.LOGIN_RESOLVED',
  LOGIN_REJECTED: 'USER.LOGIN_REJECTED',
  LOGOUT_REQUESTED: 'USER.LOGOUT_REQUESTED',
  LOGOUT_RESOLVED: 'USER.LOGOUT_RESOLVED',
  LOGOUT_REJECTED: 'USER.LOGOUT_REJECTED'
}

export { USER }

function login({ username, password }) {
  return function(dispatch) {
    dispatch(loginRequest())
    return new Promise((resolve, reject) => {
      setTimeout(function(){
        resolve({ username: 'Luca', email: 'luca@sample.xx' })
      }, 5000);
    }).then((user) => {
      dispatch(loginSuccess(user))
    }).catch((error) => {
      dispatch(loginError(error))
    })
  }
}

function loginRequest() {
  return {
    type: USER.LOGIN_REQUESTED
  }
}

function loginSuccess(user) {
  return {
    type: USER.LOGIN_RESOLVED,
    payload: user
  }
}

function loginError(error) {
  console.error(error)
  return {
    type: USER.LOGIN_REJECTED,
    payload: error
  }
}

function logout() {
  return function(dispatch) {
    dispatch(logoutRequest())
    return new Promise((resolve, reject) => {
      setTimeout(function(){
        resolve()
      }, 3000);
    }).then(() => {
      dispatch(logoutSuccess())
    }).catch((error) => {
      dispatch(logoutError(error))
    })
  }
}

function logoutRequest() {
  return {
    type: USER.LOGOUT_REQUESTED
  }
}

function logoutSuccess() {
  return {
    type: USER.LOGOUT_RESOLVED
  }
}

function logoutError(error) {
  console.error(error)
  return {
    type: USER.LOGOUT_REJECTED,
    payload: error
  }
}

export { login, logout }