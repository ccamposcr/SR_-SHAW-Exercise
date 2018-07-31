import React, { Component } from 'react';

class formComponent extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      form: ''
    };
    this.handleSubmit.bind(this);
    this.handleNameChange.bind(this);
    this.handleEmailChange.bind(this);
    this.handleMessageChange.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData(){
    fetch('http://localhost:3000/js/data.json')
      .then((response) => response.json())
      .then(results => this.setState({ form: results.data.form }));
  }

  handleNameChange(event){
    this.setState({
      name: event.target.value
    });
  }

  handleEmailChange(event){
    this.setState({
      email: event.target.value
    });
  }

  handleSubmit(event){
    console.log('Form was submitted' + this.state.name);
    event.preventDefault();
  }

  handleSubjectChange(event){
    this.setState({
      subject: event.target.value
    });
  }

  handleMessageChange(event){
    this.setState({
      message: event.target.value
    });
  }

  render(){
    const {form} = this.state;
    return(
      <div class="form--wrapper">
        <h2 class="form--title">{form.formTitle}</h2>
        <form onSubmit={this.handleSubmit} class="form">
          <label for="name">Name:*</label><input id="name" name="name" type="text" class="form--name" value={this.state.name} onChange={this.handleNameChange}/>
          <label for="email">Email Address:*</label><input id="email" name="email" type="text" class="form--email" value={this.state.email} onChange={this.handleEmailChange}/>
          <label for="subject">Subject:*</label><input id="subject" name="subject" type="text" class="form--subject" value={this.state.subject} onChange={this.handleSubjectChange}/>
          <label for="message">Message:*</label><textarea id="message" name="message" value={this.state.message} class="form--message" onChange={this.handleMessageChange}></textarea>
          <input class="form--submit" type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default formComponent;