import React from 'react'
import "./header.css"

function Header() {
  return (
    <div className='header'>
      <div className='header__logo'>
        <h1>Pair</h1>
      </div>
      <div className='header__links'>
          <h4 className='header__text'><a href='../pages/About'>About</a></h4>
          <h4 className='header__text'><a href='../pages/Mission'>Mission</a></h4>
          <h4 className='header__text'><a href='../pages/Products'>Products</a></h4>
      </div>
      <div className='header__buttons'>
          <button className='login'>Login</button>
          <button className='signup'>Sign Up</button>
      </div>
    </div>
  )
}

export default Header;
