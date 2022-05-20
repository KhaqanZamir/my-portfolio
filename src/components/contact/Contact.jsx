import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className='contact-container' id='contact'>
        <div className='contact-heading'>
            <h2>
                CONTACT
            </h2>
            <span>
                Get in touch
            </span>
        </div>
        <div className='contact-content'>
            <div className='contact-details'>
                <div className='contact-at'>
                    <FontAwesomeIcon icon={faPhone} style={{marginTop: '5px', fontSize: '18px'}} />
                    <div style={{marginLeft: '15px'}}>
                        <h3>Phone</h3>
                        <p>+923085700887S</p>
                    </div>
                </div>
                <div className='contact-at'>
                    <FontAwesomeIcon icon={faEnvelope} style={{marginTop: '2px', fontSize: '18px'}} />
                    <div style={{marginLeft: '15px'}}>
                        <h3>Email</h3>
                        <p>khaqanzamir@gmail.com</p>
                    </div>
                </div>
                <div className='contact-at'>
                    <FontAwesomeIcon icon={faLocationDot} style={{marginTop: '2px', fontSize: '18px'}} />
                    <div style={{marginLeft: '15px'}}>
                        <h3>Location</h3>
                        <p>Rawalpindi Punjab, Pakistan</p>
                    </div>
                </div>
            </div>
            <div className='contact-form'>
                <input className='input-name' placeholder='Name' type={'text'} />
                <input className='input-email' placeholder='Email' type={'email'} />
                <input className='input-subject' placeholder='Subject' type={'text'} />
                <textarea className='input-message' placeholder='Message' />
                <button className='btn-send'>Send</button>
            </div>
        </div>
    </div>
  )
}
