import React, { Component } from 'react'
import { render } from 'react-dom';

import {jsonData} from './data.jsx';
import App from './components/app.jsx';
const name1 = 'Christian';
render(
  <App source={jsonData} name={name1}/>,
  document.getElementById('app')
);
