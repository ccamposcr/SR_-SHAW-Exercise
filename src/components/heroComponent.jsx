import React, { Component } from 'react';

class heroComponent extends Component{
  constructor(props) {
    super(props);
    this.state = {
      hero: ''
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData(){
    fetch('http://localhost:3000/js/data.json')
      .then((response) => response.json())
      .then(results => this.setState({ hero: results.data.hero }));
  }

  render(){
    const {hero} = this.state;
    return(
      <div class="hero hero--wrapper" style={{backgroundImage:"url("+hero.bgImage+")"}}>
        <div class="hero--bg-overlay">
          <img class="hero--logo" src={hero.logo}/>
          <h4 class="hero--logo-title">{hero.logoTitle}</h4>
          <h2 class="hero--subtitle">{hero.logoSubtitle}</h2>
          <div class="hero--social-icons">
            <img class="hero--social-mail" src={hero.mailIcon}/>
            <img class="hero--social-facebook" src={hero.facebookIcon}/>
            <img class="hero--social-twitter" src={hero.twitterIcon}/>
          </div>
          <div class="hero--bottom">
            <h5 class="hero--title">{hero.title}</h5>
            <p class="hero--description">{hero.description}</p>
            <a href="#"><img class="hero--googlePlay" src={hero.googlePlay}/></a>
            <a href="#"><img class="hero--appStore" src={hero.appStore}/></a>
          </div>
        </div>
      </div>
    )
  }
}

export default heroComponent;
