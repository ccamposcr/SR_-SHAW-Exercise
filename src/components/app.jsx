import React, { Component } from 'react';

class App extends Component{
  constructor() {
    super();
    this.state = {
      'items': []
    }
  }
  componentDidMount() {
    fetch('http://localhost:3000/js/data.json')
      .then(results => results.json())
      .then(results => this.setState({ 'items': results }));
  }
  render(){
    return(
      <ul>
        {this.state.items.map(function(item, index){
          console.log(this.state.items);
          return (<li>{item.title}</li>)
        })}
      </ul>
    )
  }
}

export default App;
