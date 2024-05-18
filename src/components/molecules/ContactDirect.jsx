import React from 'react'
import styles from './ContactDirect.module.css'
import { Input, Textarea } from '@mantine/core'
import {IMaskInput} from 'react-imask'
import Link from 'next/link'
import { IoArrowUpSharp } from "react-icons/io5";
import Image from 'next/image'
import map from '/public/mapplaceholder.webp'

export default function ContactDirect() {
  return (
    <div className={styles.container}>
        <div className={styles.CardHeadline}>
            <h1 className={styles.headline}>OR CONTACT US DIRECTLY</h1> 
        </div>

        <div className={styles.infoContainer}>
        <div className={styles.information}>
            <div className={styles.infoWrapper}>
                <p className={styles.info}>CALL US</p>
                <p className={styles.info}>+45 3849 6248</p>
            </div>
            <div className={styles.infoWrapper}>
                <p className={styles.info}>BUSINESS INQUIRIES</p>
                <p className={styles.info}>contact@musestudio.com</p>
            </div>
            <div className={styles.infoWrapper}>
                <p className={styles.info}>JOB OPPORTUNITIES</p>
                <p className={styles.info}>job@musestudio.com</p>
            </div>
            <div className={styles.infoWrapper}>
                <p className={styles.info}>ADDRESS</p>
                <p className={styles.info}>Firskovvej 18, 2800 Kongens Lyngby, Denmark</p>
            </div>
        </div>
         
            <div className={styles.infoWrapper}>
                <Image src={map} width={600} className={styles.img}/>   
            </div>

        </div>
        
    </div>
  )
}
