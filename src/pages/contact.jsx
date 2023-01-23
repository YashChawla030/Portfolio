import React from 'react';
import './Contact.css';
  
function Contact () {
  return( 
    <div className='container'>
      <div className='title'>
				<header>CONTACT</header>
			</div>
      <div className='contact-title'>
        <header>Contact With Me</header>
      </div>
      <form className='form'>
        <div className='input-container'>
          <div>
            <input className='input-field' type={'text'} placeholder={'Enter Your Name'} />
          </div>
          <div>
            <input className='input-field' type={'number'} placeholder={'Enter Your Phone'} />
          </div>
        </div>
        <br />
        <div className='input-container'>
          <div>
            <input className='input-field' type={'text'} placeholder={'Enter Your Name'} />
          </div>
          <div>
            <input className='input-field' type={'number'} placeholder={'Enter Your Phone'} />
          </div>
        </div>
      </form>
    </div>
  )
}


export default Contact;