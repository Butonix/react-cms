import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import rootReducer from 'reducers'

const combinedReducers = combineReducers({
    ...rootReducer,
    form: formReducer
})

function configureStore() {
  return createStore(
      combinedReducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      applyMiddleware(thunk)
  )
}

export { configureStore }
