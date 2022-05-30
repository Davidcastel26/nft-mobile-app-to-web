import React from 'react'

import assets from '../assets'
import styles from '../styles/Global'

const FeaturesCard = () => {
  
}

const Features = () => {
  return (
    <div  className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div >
          <h1 className={`${styles.whiteText} ${styles.h1Text}`} >Technologies</h1>
          <p className={`${styles.whiteText} ${styles.pText}`}>ProNef has been developed using a cross-platform technology, React Native.</p>
        </div>
        <div className={`${styles.flexWrap}`}>
          <FeaturesCard />
        </div>
      </div>
    </div>
  )
}

export default Features