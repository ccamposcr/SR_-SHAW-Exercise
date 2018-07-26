import React, { Component } from 'react'
import { render } from 'react-dom';

import App from './components/app.jsx';
require('../public/scss/app.scss');
render(
  <App/>,
  document.getElementById('app')
);
