import React, { Component } from 'react';

class App extends Component{
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
      <ul>
        {sections.map(function(item, index){
          return (<li>{item.title}</li>)
        })}
      </ul>
    )
  }
}

export default App;
