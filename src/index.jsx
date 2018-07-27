import React, { Component } from 'react'
import { render } from 'react-dom';

import SectionComponent from './components/sectionComponent.jsx';
require('../public/scss/app.scss');
render(
  <SectionComponent/>,
  document.getElementById('sectionComponent')
);
