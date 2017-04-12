import React from 'react'
import ReactDOM from 'react-dom'
import App from 'containers/App'
import materiaFontWoff2 from 'material-design-icons/iconfont/MaterialIcons-Regular.woff2'
import materiaFontWoff from 'material-design-icons/iconfont/MaterialIcons-Regular.woff'
import materiaFontTff from 'material-design-icons/iconfont/MaterialIcons-Regular.ttf'
import materiaFontEot from 'material-design-icons/iconfont/MaterialIcons-Regular.eot'
import './index.scss'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

// enable hot module reload
if (module.hot) {
  module.hot.accept('containers/App', () => {
    const NextRootContainer = require('containers/App').default
    ReactDOM.render(<NextRootContainer />, document.getElementById('root'))
  })
}
