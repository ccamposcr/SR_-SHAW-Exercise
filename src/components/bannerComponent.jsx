import React, { Component } from 'react';

class bannerComponent extends Component{
  constructor(props) {
    super(props);
    this.state = {
      banner: ''
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData(){
    fetch('http://localhost:3000/js/data.json')
      .then((response) => response.json())
      .then(results => this.setState({ banner: results.data.banners[0] }));
  }

  render(){
    const {banner} = this.state;
    return(
      <div class="banner banner--wrapper">
        <span class="banner--info-description">{banner.description}</span>
      </div>
    )
  }
}

export default bannerComponent;
