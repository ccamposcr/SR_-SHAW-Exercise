import React, { Component } from 'react';

class heroComponent extends Component{
  constructor(props) {
    super(props);
    this.state = {
      hero: ''
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData(){
    fetch('http://localhost:3000/js/data.json')
      .then((response) => response.json())
      .then(results => this.setState({ hero: results.data.hero }));
  }

  render(){
    const {hero} = this.state;
    return(
      <div class="hero hero--wrapper">
        
      </div>
    )
  }
}

export default heroComponent;
