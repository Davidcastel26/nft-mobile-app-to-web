import React from 'react'

import assets from '../assets'
import styles from '../styles/Global'

const FeaturesCard = ({iconUrl, iconText}) => {
  <div className={`${styles.featureCard}`}>
    {iconText}
  </div>
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
          <FeaturesCard iconUrl={assets.react} iconText="React Native"/>
          <FeaturesCard iconUrl={assets.javascript} iconText="JavaScript"/>
        </div>
      </div>
    </div>
  )
}

export default Features