// VideoLoader.js
import React from 'react';
import styles from './loader.module.css'

const Loader = () => {
  return (
    <div className="video-loader">
      <video autoPlay loop muted className={styles.loader}>
        <source src={require('/public/loader.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Loader;
