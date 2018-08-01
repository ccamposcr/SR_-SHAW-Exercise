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
    this.state = {
      rows: [],
      rowTitle: '',
      sections: [],
      hero: [],
      banner: '',
      form: ''
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData(){
    fetch('http://localhost:3000/js/data.json')
      .then((response) => response.json())
      .then(results => this.setState({ rows: results.data.rows.rows,
                                       rowTitle: results.data.rows.rowTitle,
                                       sections: results.data.sections,
                                       hero: results.data.hero,
                                       banner: results.data.banners,
                                       form: results.data.form
                                    }));
  }

  render(){
    return(
      <div>
        <HeroComponent hero={this.state.hero}/>
        <SectionComponent sections={this.state.sections}/>
        <BannerComponent banner={this.state.banner}/>
        <RowComponent title={this.state.rowTitle} rows={this.state.rows}/>
        <FormComponent form={this.state.form}/>
      </div>
    );
  }
}

export default App;
