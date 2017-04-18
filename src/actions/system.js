const MESSAGES = {
  ADD: 'MESSAGES.ADD',
  CANCEL: 'MESSAGES.CANCEL',
  CLEAN: 'MESSAGES.CLEAN'
}

export { MESSAGES }

function addMessage(message) {
  const { type, text } = message
  return {
    type: MESSAGES.ADD,
    payload: { type, text }
  }
}

function cancelLastMessage() {
  return {
    type: MESSAGES.CANCEL
  }
}

function cleanAllMessages() {
  return {
    type: MESSAGES.CLEAN
  }
}

export { addMessage, cancelLastMessage, cleanAllMessages }