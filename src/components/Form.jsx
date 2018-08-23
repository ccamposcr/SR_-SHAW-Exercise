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
      <div className="form--wrapper">
        <h2 className="form--title">{this.props.form.formTitle}</h2>
        <form onSubmit={this.handleSubmit} className="form">
          <label for="name">Name:*</label><input id="name" name="name" type="text" className="form--name" value={this.state.name} onChange={this.handleChange}/>
          <label for="email">Email Address:*</label><input id="email" name="email" type="text" className="form--email" value={this.state.email} onChange={this.handleChange}/>
          <label for="subject">Subject:*</label><input id="subject" name="subject" type="text" className="form--subject" value={this.state.subject} onChange={this.handleChange}/>
          <label for="message">Message:*</label><textarea id="message" name="message" value={this.state.message} className="form--message" onChange={this.handleChange}></textarea>
          <input className="form--submit" type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default Form;
