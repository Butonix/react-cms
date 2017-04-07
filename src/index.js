import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// enable hot module reload
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextRootContainer = require('./containers/App').default;
    ReactDOM.render(<NextRootContainer />, document.getElementById('root'));
  });
}