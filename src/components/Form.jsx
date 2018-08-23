import React, { Component } from 'react';

class Form extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    this.handleSubmit.bind(this);
    this.handleChange.bind(this);
  }

  handleChange(event){
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event){
    console.log('Form was submitted');
    event.preventDefault();
  }

  render(){
    return(
      <div class="form--wrapper">
        <h2 class="form--title">{this.props.form.formTitle}</h2>
        <form onSubmit={this.handleSubmit} class="form">
          <label for="name">Name:*</label><input id="name" name="name" type="text" class="form--name" value={this.state.name} onChange={this.handleChange}/>
          <label for="email">Email Address:*</label><input id="email" name="email" type="text" class="form--email" value={this.state.email} onChange={this.handleChange}/>
          <label for="subject">Subject:*</label><input id="subject" name="subject" type="text" class="form--subject" value={this.state.subject} onChange={this.handleChange}/>
          <label for="message">Message:*</label><textarea id="message" name="message" value={this.state.message} class="form--message" onChange={this.handleChange}></textarea>
          <input class="form--submit" type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default Form;
