import React from 'react'
import styles from './WwoCards.module.css'
import Image from 'next/image'
import bmock from '/public/bouyeeMock.png'
import webMock from '/public/webMock.png'
import uxMock from '/public/wwo-ux.jpg'
import MyLinkComponent from './ProjectsButton'
import { IoArrowUpSharp } from "react-icons/io5"

export default function WwoCards() {
  return (
    <div className={styles.container}>
        <div className={styles.cardContainer}>
            <section className={styles.section} id={styles.one}>
                <div className={styles.sectionInfo}>
                    <h1 className={styles.headline}>CONTENT CREATION</h1>
                    <p className={styles.p}>We offer a wide range of expertise within the multimedia world. Everything from content creation, UX and web development. we cater to your needs and desires and will do everything in our power to deliver products that are up to you and your brands standards.</p>
                    <MyLinkComponent href="./wwo-content" text="LEARN MORE"><IoArrowUpSharp className={styles.arrowIcon}/></MyLinkComponent>
                </div>

                <div className={styles.rightSide}>
                    <Image src={bmock} alt='/' width={400}/>
                </div>
            </section>
        </div>

        <div className={styles.cardContainer}>
            <section className={styles.section} id={styles.two}>
                <div className={styles.sectionInfo}>
                    <h1 className={styles.headline}>WEB DEVELOPMENT</h1>
                    <p className={styles.p}>Our offerings span a broad spectrum of multimedia expertise. Whether it's shaping engaging content or orchestrating intuitive user experiences and web development, we're equipped to handle it all. Our commitment lies in understanding your unique requirements and aspirations, delivering solutions that resonate with your brand identity and surpass your expectations.</p>
                    <MyLinkComponent href="./wwo-web" text="LEARN MORE"><IoArrowUpSharp className={styles.arrowIcon}/></MyLinkComponent>
                </div>

                <div className={styles.rightSide}>
                    <Image src={webMock} alt='/' width={500}/>
                </div>
            </section>
        </div>

        <div className={styles.cardContainer}>
            <section className={styles.section} id={styles.three}>
                <div className={styles.sectionInfo}>
                    <h1 className={styles.headline}>UX</h1>
                    <p className={styles.p}>We provide a diverse spectrum of services within the multimedia realm. From crafting compelling content to expertly navigating the intricacies of UX and web development, we cover it all. Our mission is to tailor solutions that align seamlessly with your vision and objectives, ensuring that the end products meet and exceed the standards set by you and your brand.</p>
                    <MyLinkComponent href="./wwo-ux" text="LEARN MORE"><IoArrowUpSharp className={styles.arrowIcon}/></MyLinkComponent>
                </div>

                <div className={styles.rightSide}>
                    <Image src={uxMock} alt='/' width={500}/>
                </div>
            </section>
        </div>
    </div>
  )
}
