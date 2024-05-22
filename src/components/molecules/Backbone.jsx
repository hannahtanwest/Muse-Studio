import React from 'react'
import styles from './Backbone.module.css'
import Image from 'next/image'
import BBlogo from 'public/backbone-logo.png'
import phoneMock from 'public/Backbone IG Mock.png'
import Link from 'next/link'
import business from 'public/backbone business card.jpg'

export default function Backbone() {
  return (
    <div className={styles.container}>
        <div className={styles.hero} style={{backgroundSize: 'cover', backgroundImage: 'url(/backbone.jpg)', backgroundPosition: 'center'}}>
            <div className={styles.gradient}>
                <Image src={BBlogo} alt="/" width={500} className={styles.heroImg}/>
                <p className={styles.heroInfo}>Backbone is a tight and swingy quartet that, with humor and personality, plays Blues/Soul.</p>
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
                Backbone wanted to expands their identity. They wanted a logo, prints & enhance their social media presence. They were mainly on Facebook but wanted to expand onto Instagram and have a website as well. 
                </p>
            </div>
            <div className={styles.leftSide}>
                <h1 className={styles.infoHeadline}>
                    THE SOLUTION
                </h1>
                <p className={styles.infoText}>
                We created a logo and an Instagram for the band and went to some of their performances to shoot some content not only for social media but for promotional prints as well such as business cards and posters. 
                </p>
            </div>

        </div>

        <div className={styles.display} style={{backgroundSize: 'cover', backgroundImage: 'url(/bb-poster-mock.png)', backgroundAttachment: 'fixed', backgroundPosition: 'center'}}></div>



        <div className={styles.displayTwo}>
            <div>
                <Image src={phoneMock} className={styles.phMock} width={550}></Image>
            </div>
            <div className={styles.igText}>
                <h1 className={styles.infoHeadline}>SEE IT FOR YOURSELF!</h1>
                <p className={styles.infoTextIg}>If you just wanna see the finshed products in use, you can just skip to the good part.</p>
                <Link href="https://www.instagram.com/backbone__blues/" className={styles.igButton} target="_blank">INSTAGRAM</Link>
            </div>
        </div>

        <div className={styles.displayOne}>
            <Image src={business} className={styles.galleryMock}></Image>
        </div>

    </div>
  )
}
