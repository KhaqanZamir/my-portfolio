import { faGlobe, faLaptop, faPenRuler } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Services.css'

export default function Services() {
  return (
    <div className='services-container' id='services'>
        <div className='services-heading'>
            <h2>
                SERVICES
            </h2>
            <span>
                What I can do
            </span>
        </div>
        <div className='services-all'>
          <div className='service'>
            <FontAwesomeIcon className='service-icon' icon={faPenRuler} />
            <h3>UI/UX Design</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas omnis laudantium commodi ab vel temporibus.</p>
          </div>
          <div className='service'>
            <FontAwesomeIcon className='service-icon' icon={faLaptop} />
            <h3>Web Design</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas omnis laudantium commodi ab vel temporibus.</p>
          </div>
          <div className='service'>
            <FontAwesomeIcon className='service-icon' icon={faGlobe} />
            <h3>Web Development</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas omnis laudantium commodi ab vel temporibus.</p>
          </div>
        </div>
    </div>
  )
}
