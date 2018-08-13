import React, { Component } from 'react';

class Banner extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div class="banner banner--wrapper">
        <span class="banner--info-description">{this.props.banner.bannersTitle}</span>
      </div>
    )
  }
}

export default Banner;
