import React, { Component } from 'react';

class Banner extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="banner banner--wrapper">
        <span className="banner--info-description">{this.props.banner.bannersTitle}</span>
      </div>
    )
  }
}

export default Banner;
