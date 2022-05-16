import React from 'react';
import './About.css';
import Khaqan from '../../images/khaqan.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  return (
    <div id='about' className='about-container'>
        <div className='about-heading'>
            <h2>
                ABOUT
            </h2>
            <span>
                Know More About Me
            </span>
        </div>
        <div className='about-details'>
            <div className='about-picture'>
                <img src={Khaqan} alt='AboutPicure' />
            </div>
            <div className='about-me'>
                <span><b>Hello there!</b></span>
                <p>
                    I am Muhammad Khaqan Zamir, from Punjab, Pakistan. I have rich experience in frontend web development and customization.
                    Delivering work within time and budget which meets client’s requirements is my moto.
                </p>
                <div className='more-details'>
                    <div>
                        <span><b>Name:</b></span>
                        <p>Muhammad Khaqan Zamir</p>
                    </div>
                    <div>
                        <span><b>Location:</b></span>
                        <p>Islamabad, Pakistan</p>
                    </div>
                    <div>
                        <span><b>Email:</b></span>
                        <p>khaqanmalik0786@gmail.com</p>
                    </div>
                    <div>
                        <span><b>Education:</b></span>
                        <p>BS Computer Science</p>
                    </div>
                </div>
                <button className='button btn-contact'><FontAwesomeIcon style={{marginRight:'10px'}} icon={faPhone} /> Contact me</button>
            </div>
        </div>
    </div>
  )
}
