const MESSAGES = {
  ADD: 'MESSAGES.ADD',
  CANCEL: 'MESSAGES.CANCEL',
  CLEAN: 'MESSAGES.CLEAN'
}

const SYSTEM = {
  SHOW_DIALOG: 'SYSTEM.SHOW_DIALOG',
  HIDE_DIALOG: 'SYSTEM.HIDE_DIALOG'
}

export { MESSAGES, SYSTEM }

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

function showDialog(title, node, actions = []) {
  return {
    type: SYSTEM.SHOW_DIALOG,
    payload: Object.assign({}, { title, node, actions })
  }
}

function hideDialog(title = null) {
  return {
    type: SYSTEM.HIDE_DIALOG
  }
}

export { addMessage, cancelLastMessage, cleanAllMessages, showDialog, hideDialog }