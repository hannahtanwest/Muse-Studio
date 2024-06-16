import React from 'react'
import styles from './Vaeleur.module.css'
import Image from 'next/image'
import phoneMock from 'public/Morild IG Mock.png'
import Link from 'next/link'
import poster from 'public/morild mockup.png'

export default function Vaeleur() {
  return (
    <div className={styles.container}>
        <div className={styles.hero} style={{backgroundSize: 'cover', backgroundImage: 'url(/VæleurHero.jpg)'}}>
            <div className={styles.gradient}>
                <Image src="/væleurLogo.png"  alt="Morild Logo" width={500} height={200}className={styles.heroImg}/>
                <p className={styles.heroInfo}>VÆLEUR emerges as a beacon of individuality and confidence. VÆLEUR seeks to enhance the already known through meticulous detailing and an elevated construction process.</p>
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
                VÆLEUR craved a visual reflection of the brand and it's values. With inspiration from Heliot Emil, both in the garments and visual design, they felt a lack of representation. Our job was to create beautiful and raw pieces of content that drew inspiration from Heliot Emil and the individual core values of Væleur.  
                </p>
            </div>
            <div className={styles.leftSide}>
                <h1 className={styles.infoHeadline}>
                    THE SOLUTION
                </h1>
                <p className={styles.infoText}>
                We aimed to create something raw, edgy and rough in the visual. We kept the color palette to a minimum and were heavy on they whites, blacks and greys. The garments small detials were in focus and grain and effects such as a slow shutter speed enhanced the look and gave it an edge, Which supported the feeling of raw, edgy and clean.
                </p>
            </div>

        </div>

        <div className={styles.display} style={{backgroundSize: 'cover', backgroundImage: 'url(VCover.jpg)', backgroundAttachment: 'fixed', backgroundPosition: 'center'}}></div>


        <div className={styles.displayTwo}>
            <div>
                <Image src={phoneMock} className={styles.phMock} width={550} alt="Morild SoMe Mockup"></Image>
            </div>
            <div className={styles.igText}>
                <h1 className={styles.infoHeadline}>SEE IT FOR YOURSELF!</h1>
                <p className={styles.infoTextIg}>If you just wanna see the finshed products in use, you can just skip to the good part.</p>
                <Link href="https://www.instagram.com/morild_art/" className={styles.igButton} target="_blank">INSTAGRAM</Link>
            </div>
        </div>

        <div className={styles.displayOne}>
            <Image src={poster} className={styles.galleryMock} alt="Morild Gallery Mockup"></Image>
        </div>

    </div>
  )
}
