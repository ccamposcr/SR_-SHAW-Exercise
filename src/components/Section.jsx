import React, { Component } from 'react';

class Section extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="section section--wrapper">
      {this.props.sections.map(function(item, index){
        return (
          <div className="section--info">
            <img alt="Icon" className="section--info-img" src={item.icon}/>
            <h2 className="section--info-title">{item.title}</h2>
            <h4 className="section--info-subtitle">{item.subtitle}</h4>
            <p className="section--info-description">{item.description}</p>
          </div>
        );
      })}
      </div>
    )
  }
}

export default Section;
