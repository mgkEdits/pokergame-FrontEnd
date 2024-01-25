import React from 'react'
import {Link } from 'react-router-dom'

function Landing() {
  return (
    <div className='landing-sqr'>
       

      <div className='card-sqr'>
        <h1> Poker Game  </h1>
        <a href=''><Link to="log-in">Play Game</Link></a>
      </div>
  
    </div>
  )
}

export default Landing