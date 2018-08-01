import React, { Component } from 'react'
import { render } from 'react-dom';

import HeroComponent from './components/heroComponent.jsx';
import SectionComponent from './components/sectionComponent.jsx';
import BannerComponent from './components/bannerComponent.jsx';
import RowComponent from './components/rowComponent.jsx';
import FormComponent from './components/formComponent.jsx';
require('../public/scss/app.scss');

class App extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <HeroComponent/>
        <SectionComponent/>
        <BannerComponent/>
        <RowComponent/>
        <FormComponent/>
      </div>
    );
  }
}

export default App;
