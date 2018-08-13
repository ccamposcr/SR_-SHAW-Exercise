import React, { Component } from 'react'
import { render } from 'react-dom';

import Hero from './components/Hero.jsx';
import Section from './components/Section.jsx';
import Banner from './components/Banner.jsx';
import Row from './components/Row.jsx';
import Form from './components/Form.jsx';
import store from './store.jsx';
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
        <Hero hero={this.state.hero}/>
        <Section sections={this.state.sections}/>
        <Banner banner={this.state.banner}/>
        <Row title={this.state.rowTitle} rows={this.state.rows}/>
        <Form form={this.state.form}/>
      </div>
    );
  }
}

export default App;
