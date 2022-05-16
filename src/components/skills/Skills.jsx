import React, { useState } from 'react';
import './Skills.css';
import { Progress } from 'antd';
import VisibilitySensor from "react-visibility-sensor";

export default function Skills() {

  var [reactCount, setReactCount] = useState(0);
  var [nextCount, setNextCount] = useState(0);
  var [javascriptCount, setJavascriptCount] = useState(0)
  var [reduxCount, setReduxCount] = useState(0);

  const animateReact = () => {
      var id = setInterval(frame, 20);
      function frame() {
        if (reactCount > 90) {
          clearInterval(id);
        } else {
          setReactCount(reactCount++);
        }
      }
  }

  const animateNext = () => {
    var id = setInterval(frame, 20);
    function frame() {
      if (nextCount > 85) {
        clearInterval(id);
      } else {
        setNextCount(nextCount++);
      }
    }
  }

  const animateJavascript = () => {
    var id = setInterval(frame, 20);
    function frame() {
      if (javascriptCount > 95) {
        clearInterval(id);
      } else {
        setJavascriptCount(javascriptCount++);
      }
    }
  }

  const animateRedux = () => {
    var id = setInterval(frame, 20);
    function frame() {
      if (reduxCount > 95) {
        clearInterval(id);
      } else {
        setReduxCount(reduxCount++);
      }
    }
  }
  
  return (
    <div className='skills-container'>
        <div className='skills-heading'>
            <h2>
                SKILLS
            </h2>
            <span>
                Expert at
            </span>
        </div>
        <p className='skills-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima porro repellat rem aperiam libero ipsam vel hic inventore tempore totam?</p>
        <div className='skills-all'>
          <div className='skill'>
            <h3>JavaScript</h3>
            <VisibilitySensor
                    onChange={isVisible => {
                      if (isVisible) {
                        animateJavascript();
                      } 
                    }}
                  >
                <Progress
                  type="circle"
                  strokeColor={{
                    '0%': '#19194e',
                    '100%': '#788097',
                  }}
                  status='active'
                  percent={javascriptCount}
                />
            </VisibilitySensor>
          </div>
          <div className='skill'>
            <h3>React JS</h3>
            <VisibilitySensor
                    onChange={isVisible => {
                      if (isVisible) {
                        animateReact();
                      } 
                    }}
                  >
                <Progress
                  type="circle"
                  strokeColor={{
                    '0%': '#19194e',
                    '100%': '#788097',
                  }}
                  status='active'
                  percent={reactCount}
                />
            </VisibilitySensor>
          </div>
          <div className='skill'>
            <h3>Redux Toolkit</h3>
            <VisibilitySensor
                    onChange={isVisible => {
                      if (isVisible) {
                        animateRedux();
                      } 
                    }}
                  >
                <Progress
                  type="circle"
                  strokeColor={{
                    '0%': '#19194e',
                    '100%': '#788097',
                  }}
                  status='active'
                  percent={reduxCount}
                />
            </VisibilitySensor>
          </div>
          <div className='skill'>
            <h3>Next JS</h3>
            <VisibilitySensor
                    onChange={isVisible => {
                      if (isVisible) {
                        animateNext();
                      } 
                    }}
                  >
                <Progress
                  type="circle"
                  strokeColor={{
                    '0%': '#19194e',
                    '100%': '#788097',
                  }}
                  status='active'
                  percent={nextCount}
                />
            </VisibilitySensor>
          </div>
        </div>
    </div>
  )
}
