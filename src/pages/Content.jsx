import React from 'react'
import About from '../components/about/About'
import Counters from '../components/Counters/Counters'
import Home from '../components/home/Home'
import Sidebar from '../components/sidebar/Sidebar'

export default function Content() {
  return (
    <div className='container'>
        <div className='content-container'>
            <div className='content-left'>
                <div style={{position: 'fixed'}}>
                    <Sidebar/>
                </div>
            </div>
            <div className='content-right'>
                    <Home/>
                    <About/>
                    <Counters/>
            </div>
        </div>
    </div>
  )
}
