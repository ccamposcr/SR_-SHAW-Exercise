import React, { Component } from 'react';

class Hero extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="hero hero--wrapper" style={{backgroundImage:"url("+this.props.hero.bgImage+")"}}>
        <div className="hero--bg-overlay">
          <img alt="Hero Logo" className="hero--logo" src={this.props.hero.logo}/>
          <h4 className="hero--logo-title">{this.props.hero.logoTitle}</h4>
          <h2 className="hero--subtitle">{this.props.hero.logoSubtitle}</h2>
          <div className="hero--social-icons">
            <img alt="Mail Icon" className="hero--social-mail" src={this.props.hero.mailIcon}/>
            <img alt="Facebook Icon" className="hero--social-facebook" src={this.props.hero.facebookIcon}/>
            <img alt="Twitter Icon" className="hero--social-twitter" src={this.props.hero.twitterIcon}/>
          </div>
          <div className="hero--bottom">
            <h5 className="hero--title">{this.props.hero.title}</h5>
            <p className="hero--description">{this.props.hero.description}</p>
            <a href="#"><img alt="Google Play" className="hero--googlePlay" src={this.props.hero.googlePlay}/></a>
            <a href="#"><img alt="App Store" className="hero--appStore" src={this.props.hero.appStore}/></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero;
