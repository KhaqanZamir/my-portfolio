import { faClock, faFaceSmile, faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import CountUp, { useCountUp } from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
import './Counters.css';

export default function Counters() {

  const [focus, setFocus] = React.useState(false);

  return (
    <div className='counters-container'>
      <div className='counters-wrapper'>
        <div className='counter'>
          <div className='counter-icon-container'>
            <FontAwesomeIcon className='counter-icon' icon={faThumbsUp} />
          </div>
          <span>
            <CountUp start={focus ? 0 : null} end={23} duration={3} redraw={true}>
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                  <VisibilitySensor
                    onChange={isVisible => {
                      if (isVisible) {
                        setFocus(true);
                      } 
                    }}
                  >
                    <a>+</a>
                  </VisibilitySensor>
                </div>
              )}
            </CountUp>
          </span>
          <p>Projects</p>
        </div>
        <div className='counter'>
          <div className='counter-icon-container'>
            <FontAwesomeIcon className='counter-icon' icon={faClock} />
          </div>
          <span>4</span>
          <p>Years of Experience</p>
        </div>
        <div className='counter'>
          <div className='counter-icon-container'>
            <FontAwesomeIcon className='counter-icon' icon={faFaceSmile} />
          </div>
          <span>
            <CountUp start={focus ? 0 : null} end={21} duration={3} redraw={true}>
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                  <VisibilitySensor
                    onChange={isVisible => {
                      if (isVisible) {
                        setFocus(true);
                      } 
                    }}
                  >
                    <a>+</a>
                  </VisibilitySensor>
                </div>
              )}
            </CountUp>
          </span>
          <p>Happy Clients</p>
        </div>
        <div className='counter'>
          <div className='counter-icon-container'>
            <FontAwesomeIcon className='counter-icon' icon={faStar} />
          </div>
          <span>
            <CountUp start={focus ? 0 : null} end={17} duration={3} redraw={true}>
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                  <VisibilitySensor
                    onChange={isVisible => {
                      if (isVisible) {
                        setFocus(true);
                      } 
                    }}
                  >
                    <a>+</a>
                  </VisibilitySensor>
                </div>
              )}
            </CountUp>
          </span>
          <p>Reviews</p>
        </div>
      </div>
    </div>
  )
}
