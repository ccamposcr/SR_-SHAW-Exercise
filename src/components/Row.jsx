import React, { Component } from 'react';

class Row extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="row row--wrapper">
        <h2 className="row--title">{this.props.title}</h2>
      {this.props.rows.map(function(item, index){
        return (
          <div className="row--info">
            <div className={item.imagePosition}>
              <div className="column--info">
                <img alt="Icon" className="row--info-icon" src={item.icon}/>
                <h2 className="row--info-title">{item.title}</h2>
                <p className="row--info-description">{item.description}</p>
              </div>
              <div className="column--image">
                <img alt="Image" className="row--info-img" src={item.image}/>
              </div>
            </div>
          </div>
        );
      })}
      </div>
    )
  }
}

export default Row;
