import { faCloudArrowDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className='home-container' id='home'>
        <div className='home-wrapper'>
            <span className='home-welcome'>Welcome !</span>
            <div className='typist-container'>
                <h1>
                    <span className="text_1">Frontend web developer.</span>
                    <span className="text_2">I build things for Web.</span>
                </h1>
            </div>
            <p className='home-paragraph'>
                I'm software engineer specializing in developing exceptional frontend for websites (and ocassionally designing). Currently, I'm focused on developing accessible, human-centered products at <a href='https://reactivespace.com/'>Reactive Space</a>.
            </p>
            <div className='home-btn-container'>
                <button className='button btn-hire'><FontAwesomeIcon style={{marginRight: '8px'}} icon={faEnvelope} /> Hire me</button>
                <button className='button btn-download'><FontAwesomeIcon style={{marginRight: '8px'}} icon={faCloudArrowDown} />Download CV</button>
            </div>
        </div>
    </div>
  )
}
