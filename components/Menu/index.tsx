import React from 'react';
import styles from  './index.module.css';
import MenuCategory from '../MenuCategory';


const Menu = () => {

  return (
    <div className={styles.menu} id='menu'>
        <MenuCategory />
    </div>
  )
}

export default Menu