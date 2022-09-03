import React, {useState} from 'react'
import "./header.css"
import {GiHamburgerMenu} from 'react-icons/gi'

function Header() {
  const [show, setShow] = useState(true)

  const showMenu = () => {
    setShow(!show)
  }
  return (
    <div className='header'>
      <div className='header__logo'>
        <h1>Pair</h1>
      </div>
      <div className='header__links'>
        <button onClick={showMenu}>
          <GiHamburgerMenu id='hamburger'/>
        </button>
          <h4 className={show ? 'header__text' : null}><a href='../pages/About'>About</a></h4>
          <h4 className={show ? 'header__text' : null}><a href='../pages/Mission'>Mission</a></h4>
          <h4 className={show ? 'header__text' : null}><a href='../pages/Products'>Products</a></h4>
      </div>
      <div className={show ? 'header__buttons' : null}>
          <button className='login'>Login</button>
          <button className='signup'>Sign Up</button>
      </div>
      </div>
  )
}

export default Header;
