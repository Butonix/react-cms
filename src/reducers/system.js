import { MESSAGES, SYSTEM } from 'actions/system'

const initialState = {
  messages: [],
  dialogNode: null
}

export { initialState }

/*eslint no-fallthrough: "off"*/
const system = (state = initialState, action) => {
  const {type, payload} = action
  switch(type) {
    case MESSAGES.ADD: {
      const {type, text} = payload || {}
      if (['INFO', 'WARN', 'ERROR', 'DEBUG'].includes(type) && text) {
        return {
          ...state,
          messages: [...state.messages, payload]
        }
      }
      throw new Error('System Reducers: malformed messages.')
    }
    case MESSAGES.CANCEL: {
      const restMessages = [ ...state.messages ]
      restMessages.shift()

      return {
        ...state,
        messages: restMessages || []
      }
    }
    case MESSAGES.CLEAN: {
      return {
        ...state,
        messages: []
      }
    }
    case SYSTEM.SHOW_DIALOG: {
      return {
          ...state,
          dialogNode: Object.assign({}, payload)
      }
    }
    case SYSTEM.HIDE_DIALOG: {
      return {
        ...state,
        dialogNode: null
      }
    }
    default:
      return state
  }
}

export default system