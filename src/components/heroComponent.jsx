import React, { Component } from 'react';

class heroComponent extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div class="hero hero--wrapper" style={{backgroundImage:"url("+this.props.hero.bgImage+")"}}>
        <div class="hero--bg-overlay">
          <img alt="Hero Logo" class="hero--logo" src={this.props.hero.logo}/>
          <h4 class="hero--logo-title">{this.props.hero.logoTitle}</h4>
          <h2 class="hero--subtitle">{this.props.hero.logoSubtitle}</h2>
          <div class="hero--social-icons">
            <img alt="Mail Icon" class="hero--social-mail" src={this.props.hero.mailIcon}/>
            <img alt="Facebook Icon" class="hero--social-facebook" src={this.props.hero.facebookIcon}/>
            <img alt="Twitter Icon" class="hero--social-twitter" src={this.props.hero.twitterIcon}/>
          </div>
          <div class="hero--bottom">
            <h5 class="hero--title">{this.props.hero.title}</h5>
            <p class="hero--description">{this.props.hero.description}</p>
            <a href="#"><img alt="Google Play" class="hero--googlePlay" src={this.props.hero.googlePlay}/></a>
            <a href="#"><img alt="App Store" class="hero--appStore" src={this.props.hero.appStore}/></a>
          </div>
        </div>
      </div>
    )
  }
}

export default heroComponent;
