import React from 'react';
import './index.css';
import Image from 'next/image';

import logo from '@/app/images/RS.png'

function Nav() {
  return (
    <nav className='navbar'>
        <div className="logo">
            <Image 
              src={logo}
              alt='rs cuisine logo'
              width={100}
              height={100}/>
        </div>
        <div className="navbar-container container">
          <input type="checkbox" name="" id=""/>
          <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
          </div>
          <ul className='menu-items'>
              <li>Home</li>
              <li>Order</li>
              <li>Menu</li>
              <li>Contact</li>
          </ul>
        </div>
    </nav>
  )
}

export default Nav