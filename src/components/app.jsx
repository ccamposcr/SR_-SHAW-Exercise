import React, { Component } from 'react';

class App extends Component{
  render(){
    return(
      <span>{this.props.source.data}</span>
      /*props.source.map(function(job) {
          return (
            <div key={job.url} className="job">
              <a href={job.url}>
                {job.company_name}
                is looking for a
                {job.term}
                {job.title}
              </a>
            </div>
          );
        }),
      <ul>
        {this.props.source.map(function(x, idx){
          return (<li key={idx}>{d.title}</li>)
        })}
      </ul>*/
    )
  }
}

export default App;
