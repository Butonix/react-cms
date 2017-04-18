import { combineReducers } from 'redux'
import system from './system'
import user from './user'

const rootReducer = combineReducers({
  system,
  user
})

export default rootReducer