# react-cms
## Table of Contents

- [Updating to New Releases](#updating-to-new-releases)

## Create app

Follow *create-react-app* instructions [here](CREATE_REACT_APP.md)

## Hot Module Reload
Add following content to the bottom of render container *src/index.js*
```
import React from 'react';
import ReactDOM from 'react-dom';
...
// enable hot module reload
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextRootContainer = require('./containers/App').default;
    ReactDOM.render(<NextRootContainer />, document.getElementById('root'));
  });
}
...
```
## SASS/SCSS Support
Eject webpack config
```
$ npm eject
```
Add following modules
```
$ yarn add sass-loader node-sass --dev
```
Edit *config/webpack.config.dev.js* add code below
```
...
{
  exclude: [
    ...
    // added by sass support
    /\.sass$/,
    /\.scss$/
  ],
  ...
},
// Process JS with Babel.
{
  test: /\.(js|jsx)$/,
  ...
},
// sass scss support
{
  test: /\.s(a|c)ss$/,
  include: paths.appSrc,
  loaders: ["style", "css", "sass"]
},
...
```
Rename App.css to App.scss and try if it work and hot reload on scss file changes
## ESLint config
Add following modules
```
$ yarn add eslint-config-react-app babel-eslint@7.1.1 eslint@3.16.1 eslint-plugin-flowtype@2.21.0 eslint-plugin-import@2.0.1 eslint-plugin-jsx-a11y@4.0.0 eslint-plugin-react@6.4.1 --dev
```
Create *.eslintrc.json* with following content
```
{
  "extends": "react-app"
}
```


