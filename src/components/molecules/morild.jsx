import React from 'react'
import styles from './morild.module.css'
import Image from 'next/image'
import mLogo from '/morildlogo.png'
import phoneMock from '/Morild IG Mock.png'
import Link from 'next/link'
import poster from '/morild mockup.png'

export default function Morild() {
  return (
    <div className={styles.container}>
        <div className={styles.hero} style={{backgroundSize: 'cover', backgroundImage: 'url(/morild.jpg)'}}>
            <div className={styles.gradient}>
                <Image src={mLogo} alt="/" width={500} className={styles.heroImg}/>
                <p className={styles.heroInfo}>An artist who paints neo-expressionism with focus on the provocative tabu subjects in society.</p>
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
                Michael Morild, the talented artist, is on the lookout for someone to handle his social media since he's all about the art and needs a hand with the online side of things. He didn't have many demands on how things were shot and run as long as it mirrored his art. 
                </p>
            </div>
            <div className={styles.leftSide}>
                <h1 className={styles.infoHeadline}>
                    THE SOLUTION
                </h1>
                <p className={styles.infoText}>
                Michael Morild, the talented artist, is on the lookout for someone to handle his social media since he's all about the art and needs a hand with the online side of things. He didn't have many demands on how things were shot and run as long as it mirrored his art. 
                </p>
            </div>

        </div>

        <div className={styles.display} style={{backgroundSize: 'cover', backgroundImage: 'url(morildBG.jpg)', backgroundAttachment: 'fixed', backgroundPosition: 'center'}}></div>


        <div className={styles.displayTwo}>
            <div>
                <Image src={phoneMock} className={styles.phMock} width={550}></Image>
            </div>
            <div className={styles.igText}>
                <h1 className={styles.infoHeadline}>SEE IT FOR YOURSELF!</h1>
                <p className={styles.infoTextIg}>If you just wanna see the finshed products in use, you can just skip to the good part.</p>
                <Link href="https://www.instagram.com/morild_art/" className={styles.igButton} target="_blank">INSTAGRAM</Link>
            </div>
        </div>

        <div className={styles.displayOne}>
            <Image src={poster} className={styles.galleryMock}></Image>
        </div>

    </div>
  )
}
