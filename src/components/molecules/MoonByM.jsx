import React from 'react'
import styles from './MoonByM.module.css'
import Image from 'next/image'
import mbmLogo from '/public/mbm-logo.png'
import Link from 'next/link'
import one from '/public/1.jpg'

export default function MoonByM() {
  return (
    <div className={styles.container}>
        <div className={styles.hero} style={{backgroundSize: 'cover', backgroundImage: 'url(/mbm-clean.webp)'}}>
            <div className={styles.gradient}>
                <Image src={mbmLogo} alt="Moon By M Logo" width={500} className={styles.heroImg}/>
                <p className={styles.heroInfo}>Inspiring women to become their best self. Elevated pieces for an elevated everyday look</p>
                <h5 className={styles.categoryText}>CATEGORY</h5>

                <div className={styles.categories}>
                    <p className={styles.category}>ART-DIRECTION</p>
                    <p className={styles.category}>CONTENT CREATION</p>
                </div>
            </div>
        </div>

        <div className={styles.infoBox}>
            <div className={styles.rightSide}>
                <h1 className={styles.infoHeadline}>
                    THE CASE
                </h1>
                <p className={styles.infoText}>
                    Moon By M delivers elevated clothing options for those who desire to stand out. With focus on body fitting clothing for the day and night scene, this brand wishes to showcase this aesthetic through visuals. 
                </p>
            </div>
            <div className={styles.leftSide}>
                <h1 className={styles.infoHeadline}>
                    THE SOLUTION
                </h1>
                <p className={styles.infoText}>
                    By capturing the products in clean, neutral settings with a hint of femininity we accomplish the customers needs. We try to capture the image of women in power. Creating a dream of becoming independent, confident and sexy when wearing MBM.
                </p>
            </div>

    

        </div>

        <div className={styles.displayOne} style={{backgroundSize: 'cover', backgroundImage: 'url(/omayma.jpg)', backgroundPosition:'center', backgroundAttachment: 'fixed', backgroundPosition: 'center'}}></div>

            <div className={styles.displayTwo}>
                <div>
                    <video src={require('/public/mbm-video-mock.mp4')} className={styles.hero} autoPlay muted loop alt="SoMe video mockup"/>
                </div>
                <div className={styles.igText}>
                    <h1 className={styles.infoHeadline}>SEE IT FOR YOURSELF!</h1>
                    <p className={styles.infoTextIg}>If you just wanna see the finshed products in use, you can just skip to the good part.</p>
                    <Link href="https://www.instagram.com/moon.by.m/" className={styles.igButton} target="_blank">INSTAGRAM</Link>
                </div>
        </div>

    </div>
  )
}
