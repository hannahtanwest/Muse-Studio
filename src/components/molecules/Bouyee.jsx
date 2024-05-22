import React from 'react'
import styles from './Bouyee.module.css'
import Image from 'next/image'
// import bouyeeLogo from 'public/bouyeelogo.png'
import phoneMock from 'public/bouyeeMock.png'
import Link from 'next/link'
import one from 'public/1.jpg'

export default function MoonByM() {
  return (
    <div className={styles.container}>
        <div className={styles.hero} style={{backgroundSize: 'cover', backgroundImage: 'url(/bouyeeHero.jpg)', backgroundPosition: 'center'}}>
            <div className={styles.gradient}>
                <Image src="/bouyeelogo.png" alt="/" width={500} height={150} className={styles.heroImg}/>
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
                This clothing brand was a startup and needed help creating a brand identity through visual content, everything from website visuals to SoMe content. They wanted to express the 'bouyee' lifestyle but in a raw, everyday life aesthetic. Our team collaborated closely with them, ensuring that every visual element resonated authentically with their vision and values.
                </p>
            </div>
            <div className={styles.leftSide}>
                <h1 className={styles.infoHeadline}>
                    THE SOLUTION
                </h1>
                <p className={styles.infoText}>
                Through close collaboration, we ensure that every visual element authentically reflects your brand's vision and values, resonating deeply with your target audience to drive meaningful connections and engagement.
                </p>
            </div>

        </div>

        <div className={styles.display} style={{backgroundSize: 'cover', backgroundImage: 'url(hero.jpg)', backgroundAttachment: 'fixed', backgroundPosition: 'center'}}></div>

        <div className={styles.displayOne}>
            <Image src={one} className={styles.galleryMock}></Image>
        </div>

        <div className={styles.displayTwo}>
            <div>
                <Image src={phoneMock} className={styles.phMock} width={550}></Image>
            </div>
            <div className={styles.igText}>
                <h1 className={styles.infoHeadline}>SEE IT FOR YOURSELF!</h1>
                <p className={styles.infoTextIg}>If you just wanna see the finshed products in use, you can just skip to the good part.</p>
                <Link href="https://www.instagram.com/bouyee.studio/" className={styles.igButton} target="_blank">INSTAGRAM</Link>
            </div>
        </div>

    </div>
  )
}
