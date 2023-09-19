import React from 'react';
import Image from 'next/image';
import logo from '../../public/images/RS.png'
import styles from './index.module.css';

const Intro = () => {
  return (
    <div className={styles.intro}>
      {/*using blackLayout div just to make it absolute and cover the whole page and hide the nav*/}
        <div className={styles.blackLayout}>
          <div className={styles.logoContainer}>
            <Image 
              src={logo}
              alt='RS cusine logo'
              fill
              />
          </div>
        </div>
    </div>
  )
}

export default Intro