import React from 'react'

import styles from '../styles/Global';
import assets from '../assets';

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>Download the Source Code</h1>
          <p className={`${styles.pText} ${styles.blackText}`}>Get the full source code on GitHub</p>
          <button className={`${styles.btnPrimary}`}> 
            <a href="https://github.com/Davidcastel26/nft-mobile-app-to-web">  Source Code </a>
           </button>
        </div>
      </div>
    </div>
  )
}

export default Download