import React from 'react'
import heroImage from './images/pair-programming.jpg'
import "./mainbody.css"

function MainBody() {
    const motto = "<Connect with Pairs and Pair Programme or Design/>"
  return (
    <div className='main'>
        <div className='main__hero'>
            <h2>{motto}</h2>
            <p>Select dev with the right skills you need and setup a call.</p>
            <i>It is that simple.</i>
        </div>
        <div className='main__heroImage'>
            <img src={heroImage} alt="pair programming guys" />
        </div>
    </div>
  )
}

export default MainBody
