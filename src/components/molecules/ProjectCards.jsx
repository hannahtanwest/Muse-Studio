import React from 'react'
import styles from './ProjectCards.module.css'
import Link from 'next/link'


export default function ProjectCards() {
  return (
    <div className={styles.container}>
        <div className={styles.cardContainer}>
            <Link className={styles.section} id="one" href="./bouyee-page" style={{backgroundSize: 'cover', backgroundImage: 'url(/bouyeeHero.webp)', backgroundPosition: 'center'}}>
                
                    <div className={styles.headline}>
                        <h1>BOUYEE STUDIO</h1>
                    </div>
            </Link>
        </div>

        <div className={styles.cardContainer}>
            <Link className={styles.section} id={styles.two} href="./mbm-page" style={{backgroundSize: 'cover', backgroundImage: 'url(/mbm-clean.webp)'}}>
                    <div className={styles.headline}>
                        <h1>MOON BY M</h1>
                    </div>
            </Link>
        </div>

        <div className={styles.cardContainer}>
            <Link className={styles.section} id={styles.three} href="./backbone-page" style={{backgroundSize: 'cover', backgroundImage: 'url(/backbone.jpg)',  backgroundPosition: 'center'}}>
                    <div className={styles.headline}>
                        <h1>BACKBONE</h1>
                    </div>
            </Link>
        </div>

        <div className={styles.cardContainer}>
            <Link className={styles.section} id={styles.four} href="./morild-page" style={{backgroundSize: 'cover', backgroundImage: 'url(/morild.webp)',  backgroundPosition: 'center'}}>
                    <div className={styles.headline}>
                        <h1>MORILD ART</h1>
                    </div>
            </Link>
        </div>
    </div>
  )
}
