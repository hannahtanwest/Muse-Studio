import React from 'react'
import styles from './Headline.module.css'

const Headline = ({ text, info }) => {
    return(
    <div>
        <h1 className={styles.headline}>{text}</h1>
        <p className={styles.info}>{info}</p>
    </div>
    )
  };

  export default Headline;
