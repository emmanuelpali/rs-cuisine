"use client"
import React, { useState } from 'react';
import  styles from './index.module.css';
import Image from 'next/image';

import logo from '../../public/images/RS.png'
import Link from 'next/link';


function Nav() {
  const [isChecked, setIsChecked] = useState(false);

  const handleListItemClick = () => {
    // Toggle the state of isChecked when a list item is clicked
    setIsChecked(!isChecked);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Image
          src={logo}
          alt='rs cuisine logo'
          fill
        />
      </div>
      <div className={styles.navbarContainer}>
        <input
          type="checkbox"
          name=""
          id=""
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)} // Toggle the state when the checkbox itself is clicked
        />
        <div className={styles.hamburgerLines}>
          <span className={`${styles.line} ${styles.line1}`}></span>
          <span className={`${styles.line} ${styles.line2}`}></span>
          <span className={`${styles.line} ${styles.line3}`}></span>
        </div>
        <ul className={styles.menuItems}>
          <li><Link href="#home" onClick={handleListItemClick}>Home</Link></li>
          <li>Order</li>
          <li><Link href="#menu" onClick={handleListItemClick}>Menu</Link></li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;