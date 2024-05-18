import Link from 'next/link'
import React from 'react'
import styles from './IndexPro.module.css'
import { IoArrowUpSharp } from "react-icons/io5";

class ImageComponent extends React.Component {
  render() {
    const { imageUrl, text, href} = this.props;

    return (
      <div className={styles.container}>
        <img src={imageUrl} className={styles.img}/>
        <h1 className={styles.headline}>{text}</h1>
        {/* <Link href="" className={styles.navLink}>VIEW PROJECT<IoArrowUpSharp className={styles.arrowIcon}/></Link> */}
        <a href={href} className={styles.navLink}>VIEW PROJECT<IoArrowUpSharp className={styles.arrowIcon}/></a>
      </div>
    );
  }
}

export default ImageComponent;
