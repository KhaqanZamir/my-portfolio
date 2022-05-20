import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ClientImage from '../../images/clientImg.jpg';
import './Testimonial.css';

export default function ReviewCard() {
  return (
    <div className='review-card'>
        <FontAwesomeIcon icon={faQuoteLeft} />
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, exercitationem vel. Velit quas saepe sequi aliquid tempora voluptate quam? Illum amet laborum maiores debitis commodi.
        </p>
        <div className='client-details'>
            <img src={ClientImage} alt="client-img" />
            <div style={{marginLeft: '10px'}}>
                <p className='client-name'>John Doe</p>
                <p className='client-desc'>Founder at Icomatic Pvt Ltd</p>
            </div>
        </div>
    </div>
  )
}
