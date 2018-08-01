import React, { Component } from 'react';

class rowComponent extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div class="row row--wrapper">
        <h2 class="row--title">{this.props.title}</h2>
      {this.props.rows.map(function(item, index){
        return (
          <div class="row--info">
            <div className={item.imagePosition}>
              <div class="column--info">
                <img alt="Icon" class="row--info-icon" src={item.icon}/>
                <h2 class="row--info-title">{item.title}</h2>
                <p class="row--info-description">{item.description}</p>
              </div>
              <div class="column--image">
                <img alt="Image" class="row--info-img" src={item.image}/>
              </div>
            </div>
          </div>
        );
      })}
      </div>
    )
  }
}

export default rowComponent;
