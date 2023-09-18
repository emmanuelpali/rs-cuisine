import Image from 'next/image';
import React from 'react';
import menudata from '@/app/menudata/data'
import styles from './index.module.css';
import Reveal from '../Reveal';

  
  const MenuCategory: React.FC = () => {
    return (
      <Reveal>
        {menudata.map((menu) => (
        <Reveal>
          <div className={styles.menuCategory} key={menu.id}>
            <div className={styles.categoryHeader}>
            <h3>{menu.categoryName}</h3>
              <div className={styles.categoryImage}>
                <Image 
                    src={menu.thumbnail} 
                    alt="Picture of Masa"
                    fill
                    />
              </div>
              <p>{menu.description}</p>

            </div>
            <div className={styles.categoryItemsContainer}>
              {Object.keys(menu.categoryItems).map((itemName) => (
                <li key={itemName}>
                  <span className={styles.quantity}>{menu.categoryItems[itemName].quantity}</span> 
                  <span>{menu.categoryItems[itemName].price}</span>
                </li>
              ))}
            </div>
          </div>
        </Reveal>
        ))}
      </Reveal>
    );
  };
  
  export default MenuCategory;