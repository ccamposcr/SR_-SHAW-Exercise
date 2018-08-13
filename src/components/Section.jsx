import React, { Component } from 'react';

class Section extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div class="section section--wrapper">
      {this.props.sections.map(function(item, index){
        return (
          <div class="section--info">
            <img alt="Icon" class="section--info-img" src={item.icon}/>
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

export default Section;
