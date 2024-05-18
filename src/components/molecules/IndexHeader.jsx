import React from 'react'
import styles from './IndexHeader.module.css'
import Image from 'next/image'
import logo from '/public/logo.png'
import Link from 'next/link'
import { IoArrowUpSharp } from "react-icons/io5";


export default function IndexHeader() {
  return (
    <div className={styles.container}>
      {/* <Image src={logo} alt="/" width={400} className={styles.logo}/> */}
      {/* <h1 className={styles.headline}>A CREATIVE CONCEPT STUDIO</h1> */}
      <div className={styles.links}>
        <Link href="./cases" className={styles.link}>VIEW CASES <IoArrowUpSharp className={styles.arrowIcon}/></Link>
        <Link href="./contact" className={styles.link}>LET'S START A PROJECT <IoArrowUpSharp className={styles.arrowIcon}/></Link>
      </div>
      <video src={require('/public/indexHero.mov')} className={styles.hero} autoPlay muted loop/>
      <video src={require('/public/heroMobile.mov')} className={styles.heroMobile} autoPlay muted loop/>

    </div>
  )
}
