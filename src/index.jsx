import React, { Component } from 'react'
import { render } from 'react-dom';

import SectionComponent from './components/sectionComponent.jsx';
import BannerComponent from './components/bannerComponent.jsx';
import RowComponent from './components/rowComponent.jsx';
import FormComponent from './components/formComponent.jsx';
require('../public/scss/app.scss');

render(
  <SectionComponent/>,
  document.getElementById('sectionComponent')
);

render(
  <BannerComponent/>,
  document.getElementById('bannerComponent')
);

render(
  <RowComponent/>,
  document.getElementById('rowComponent')
);

render(
  <FormComponent/>,
  document.getElementById('formComponent')
);
