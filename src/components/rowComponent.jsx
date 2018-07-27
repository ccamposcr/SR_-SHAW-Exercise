import React, { Component } from 'react';

class rowComponent extends Component{
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      rowTitle : ''
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData(){
    fetch('http://localhost:3000/js/data.json')
      .then((response) => response.json())
      .then(results => this.setState({ rows: results.data.rows.rows, rowTitle: results.data.rows.rowTitle }));
  }

  render(){
    const {rows} = this.state;
    const {rowTitle} = this.state;
    return(
      <div class="row row--wrapper">
        <h2 class="row--title">{rowTitle}</h2>
      {rows.map(function(item, index){
        return (
          <div class="row--info">
            <div class="column--info">
              <h2 class="row--info-title"><img class="row--info-icon" src={item.icon}/>{item.title}</h2>
              <p class="section--info-description">{item.description}</p>
            </div>
            <div class="column--image">
              <img class="row--info-img" src={item.image}/>
            </div>
          </div>
        );
      })}
      </div>
    )
  }
}

export default rowComponent;