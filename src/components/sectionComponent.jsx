import React, { Component } from 'react';

class sectionComponent extends Component{
  constructor(props) {
    super(props);
    this.state = {
      sections: []
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData(){
    fetch('http://localhost:3000/js/data.json')
      .then((response) => response.json())
      .then(results => this.setState({ sections: results.data.sections }));
  }

  render(){
    const {sections} = this.state;
    return(
      <div class="section section--wrapper">
      {sections.map(function(item, index){
        return (
          <div class="section--info">
            <img class="section--info-img" src={item.url}/>
            <h2 class="section--info-title">{item.title}</h2>
            <h4 class="section--info-subtitle">{item.subtitle}</h4>
            <p class="section--info-description">{item.description}</p>
          </div>
        );
      })}
      </div>
    )
  }
}

export default sectionComponent;
