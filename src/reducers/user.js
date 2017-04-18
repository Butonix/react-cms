import { USER } from 'actions/user'

const initialState = {
  currentUser: null,
  isFetching: false,
  error: null
}

export { initialState }

const system = (state = initialState, action) => {
  const {type, payload} = action
  switch(type) {
    case USER.LOGIN_REQUESTED: {
      return {
        ...state,
        isFetching: true,
        isStale: false,
        error: null
      }
    }
    case USER.LOGIN_RESOLVED: {
      return {
        ...state,
        currentUser: Object.assign({}, payload),
        isFetching: false,
        error: null
      }
    }
    case USER.LOGIN_REJECTED: {
      const { error } = payload
      return {
        ...state,
        error: Object.assign({}, error),
        currentUser: null,
        isFetching: false
      }
    }
    case USER.LOGOUT_REQUESTED: {
      return {
        ...state,
        isFetching: true,
        isStale: false,
        error: null
      }
    }
    case USER.LOGOUT_RESOLVED: {
      return {
        ...state,
        currentUser: null,
        isFetching: false,
        error: null
      }
    }
    case USER.LOGOUT_REJECTED: {
      const { error } = payload
      return {
        ...state,
        error: Object.assign({}, error),
        currentUser: null,
        isFetching: false
      }
    }
    default:
      return state
  }
}

export default system