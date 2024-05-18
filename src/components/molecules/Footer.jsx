import { stylesToString } from '@mantine/core'
import React from 'react'
import blogo from '/public/blogo.png'
import styles from './Footer.module.css'
import Image from 'next/image'
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";
import Link from 'next/link'
import { IoArrowUpSharp } from "react-icons/io5";

export default function Footer() {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.footerLeft}>
                <Link href="" className={styles.footerLinks}>FAQ <IoArrowUpSharp className={styles.arrowIcon}/></Link>
                <Link href="" className={styles.footerLinks}>Privacy Policy <IoArrowUpSharp className={styles.arrowIcon}/></Link>
            </div>
            <div className={styles.footerInfo}>
                <div>
                    <Link href="https://www.figma.com/file/OogDGlGmviB5oxLUXc4zJb/Low%2Fhigh-fidelity-wireframe?type=design&node-id=139%3A571&mode=design&t=5GTnmZ02t1gjWg8u-1" target="_blank"><FiInstagram className={styles.icon}/></Link>
                    <Link href="https://www.figma.com/file/OogDGlGmviB5oxLUXc4zJb/Low%2Fhigh-fidelity-wireframe?type=design&node-id=175%3A6695&mode=design&t=5GTnmZ02t1gjWg8u-1" target="_blank"><FaLinkedin className={styles.icon}/></Link>
                </div>
                <p className={styles.p}>45+ 3849 6248</p>
                <p className={styles.p}>hello@musestudio.com</p>
                <p className={styles.p}>Firskovvej 18, 2800 Kongens Lyngby, Denmark</p>
            </div>
        </div>

        <div className={styles.carousel}>
            <div className={styles.footerLogoCarousel}>
                <div className={styles.footerLogo}>
                    <Image src={blogo} alt='/' width={400}/>
                    <Image src={blogo} alt='/' width={400}/>
                    <Image src={blogo} alt='/' width={400}/>
                    <Image src={blogo} alt='/' width={400}/>
                    <Image src={blogo} alt='/' width={400}/>
                    <Image src={blogo} alt='/' width={400}/>
                    {/* Duplicate images to ensure smooth looping */}
                    <Image src={blogo} alt='/' width={400}/>
                    <Image src={blogo} alt='/' width={400}/>
                    <Image src={blogo} alt='/' width={400}/>
                    <Image src={blogo} alt='/' width={400}/>
                    <Image src={blogo} alt='/' width={400}/>
                </div>
            </div>
        </div>
    </div>
  )
}
