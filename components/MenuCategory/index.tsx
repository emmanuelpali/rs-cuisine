import Image, { StaticImageData } from 'next/image';
import React from 'react';
import menudata from '@/app/menudata/data'
import styles from './index.module.css';
import Reveal from '../Reveal';

interface MenuSub {
  quantity: string;
  price: string;
}

interface MenuItem {
  [key: string]: MenuSub;
}

interface MenuData {
  id: number;
  categoryName: string;
  thumbnail: StaticImageData;
  description: string;
  categoryItems: MenuItem;
}

const MenuCategory: React.FC = () => {
  return (
    <>
            <h2>Our Menu</h2>
      {menudata.map((menu: MenuData) => (
        <Reveal key={menu.id}>
          <div className={styles.menuCategory}>
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
              {Object.keys(menu.categoryItems).map((itemName: string) => (
                <li key={itemName}>
                  <span className={styles.quantity}>{menu.categoryItems[itemName].quantity}</span>
                  <span>{menu.categoryItems[itemName].price}</span>
                </li>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </>
  );
};

export default MenuCategory;
