import React from 'react';
import styles from './ProjectsButton.module.css' 
import { IoArrowUpSharp } from "react-icons/io5"

class MyLinkComponent extends React.Component {
  render() {
    const { href, text } = this.props;

    return (
      <a href={href} className={styles.link}>{text}<IoArrowUpSharp className={styles.arrowIcon}/></a>
    );
  }
}

export default MyLinkComponent;
