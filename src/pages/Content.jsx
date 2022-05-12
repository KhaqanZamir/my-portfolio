import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'

export default function Content() {
  return (
    <div className='container'>
        <div className='content-container'>
            <div className='content-left'>
                <Sidebar/>
            </div>
            <div className='content-right'>
                <div style={{width: '100%'}}>
                    ddddddddddddddddddddddddddddddddd
                </div>
            </div>
        </div>
    </div>
  )
}
