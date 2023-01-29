import React from 'react';
import './Contact.css';
import { RiSendPlaneFill } from 'react-icons/ri';
  
class Contact extends React.Component {


  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return( 
      <div className='container'>
        <div style={{'display': 'block'}}>
          <div className='title'>
	  			    <header>CONTACT</header>
	  		  </div>
        </div>
        <div style={{'display': 'block'}}>
          <div className='contact-title'>
            <header>Contact With Me</header>
          </div>
        </div>
        <div className='form-container'>
          <form className='form'>
            <div className='form-container'>
              <div className='input-container'>
                <input className='input-field' value={this.state.value} type={'text'} autoComplete="new-password" placeholder={'Enter Your Name'} onChange={this.handleChange}/>
                <input className='input-field' type={'number'} autoComplete="new-password" placeholder={'Enter Your Phone'} />
              </div>
              <br />
              <div className='input-container'>
                <input className='input-field' type={'text'} autoComplete={"new-password"} placeholder={'Enter Your Email'} />
                <input className='input-field' type={'number'} autoComplete={"new-password"} placeholder={'Enter Your Subject'} />
              </div>
              <textarea placeholder='Enter Your Message' className='text-field' type={'text'} />
              <div className='send-btn'>
                <div className='btn' onClick={this.handleSubmit}>
                  <label>Send Message</label>
                  <RiSendPlaneFill style={{'padding':5}} />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}


export default Contact;