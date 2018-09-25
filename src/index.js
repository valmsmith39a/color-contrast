import React from 'react'
import ReactDOM from 'react-dom'
import AppRoot from './containers/AppRoot'

const title = 'React App Setup 7';

ReactDOM.render(
  <AppRoot />,
  document.getElementById('app')
);

module.hot.accept();
