import React from 'react'
import Logo from './Logo'

export default function Header() {
  return (
    <div className='header'>
      <Logo />
      <div className="secondPart">
        <p>🚀 30 faker posts found!</p>
        <input type="text" placeholder='Search posts...' />
        <button className='clearBtn'>Clear posts</button>
      </div>
    </div>
  )
}
