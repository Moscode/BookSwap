import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineShoppingCart, AiOutlineMenu} from 'react-icons/ai'

import bookstore from '../assets/bookstore.png'
const Header = () => {
  return (
    <header>
        <img src={bookstore} alt="" className='logo'/>
        <div className="inputBox">
            <input type="text" placeholder='Search for genres...'/>
            <BiSearch className='searchIcon'/>
        </div>
        <div className='shoppingCart'>
            <AiOutlineShoppingCart className='cart'/>
            <div className='cartContent'>
              <p>2</p>
            </div>
        </div>
        <div className='profileContainer'>
          <div className='imgBox'>
            <img src='https://randomuser.me/api/portraits/med/men/98.jpg' alt='' className='profilePic'/>
          </div>
          <div className='profileUsername'>
            <h2>Odunosho Moses</h2>
          </div>
        </div>
        <div className='toggleMenu'>
          <AiOutlineMenu className='toggleBar'/>
        </div>
    </header>
  )
}

export default Header