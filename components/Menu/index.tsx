import React from 'react';
import styles from  './index.module.css';
import MenuCategory from '../MenuCategory';


const Menu = () => {

  return (
    <div className={styles.menu}>
        <h2>Our Menu</h2>
        <MenuCategory />
    </div>
  )
}

export default Menu