import Link from 'next/link'
import React from 'react'
import styles from './IndexCards.module.css'
import IndexPro from './IndexPro'
import { Input, Textarea } from '@mantine/core'
import {IMaskInput} from 'react-imask'
import { IoArrowUpSharp } from "react-icons/io5";
import Image from 'next/image'
import content from '/public/bouyeeMock.png'
import webMock from '/public/webMock.png'
import uxMock from '/public/wwo-ux.jpg'


export default function IndexCards() {

  return (
    <div className={styles.container}>
        <div className={styles.cardContainer}>
            <section className={styles.section} id={styles.one}>
                <div className={styles.headline}>
                    <h1>LASTEST PROJECTS</h1>
                </div>

                <div className={styles.projectImages}>
                    <IndexPro text="BOUYEE STUDIOS" imageUrl="/bouyee.jpg" href="./bouyee-page"/>
                    <IndexPro text="MOON BY M" imageUrl="/mbm.png" href="./mbm-page" />
                    <IndexPro text="BACKBONE" imageUrl="bb.jpg" href="./backbone-page"/>
                    <IndexPro text="MORILD" imageUrl="/morild.webp" href="./morild-page"/>
                    <IndexPro text="VÆLEUR" imageUrl="/vaelur.jpg"/>
                </div>
            </section>
        </div>

        <div className={styles.cardContainer}>
            <section className={styles.section} id={styles.two}>
                <div className={styles.headline}>
                    <h1>WHAT WE OFFER</h1>

                </div>

                <div className={styles.specialties}>
                    <Link href="./wwo-content" className={styles.specialty}>
                        <Image src={content} width={250}/>
                        <h5>CONTENT CREATION<IoArrowUpSharp className={styles.arrowIcon}/></h5>
                    </Link>
                    <Link href="./wwo" className={styles.specialty}>
                        <Image src={uxMock} width={280}/>
                        <h5>UX<IoArrowUpSharp className={styles.arrowIcon}/></h5>
                    </Link>
                    <Link href="./wwo-web" className={styles.specialty}>
                        <Image src={webMock} width={400}/>
                        <h5>WEB DEVELOPMENT<IoArrowUpSharp className={styles.arrowIcon}/></h5>
                    </Link>
                    

                </div>
            </section>
        </div>

        <div className={styles.cardContainer}>
            <section className={styles.section} id={styles.two}>
                <div className={styles.headline}>
                    <h1>HOW WE WORK</h1>

                </div>

                <div className={styles.specialties}>
                    <div  className={styles.specialty}>
                        <div className={styles.hwwImgOne}></div>
                        <h5>1. YOUR NEEDS</h5>
                    </div>
                    <div className={styles.specialty}>
                        <div className={styles.hwwImgTwo}></div>
                        <h5>2. IDEATE</h5>
                    </div>
                    <div className={styles.specialty}>
                        <div className={styles.hwwImgThree}></div>
                        <h5>3. WORK PROGRESS</h5>
                    </div>
                    

                </div>
            </section>
        </div>

        <div className={styles.cardContainer}>
            <section className={styles.section} id={styles.three}>
                <div className={styles.headline}>
                    <h1>THE CUSTOMER IS ALWAYS RIGHT</h1>
                    <h5>Impressive Results, Stellar Service!</h5>
                    <p className={styles.pCursive}>Working with MUSE was an absolute delight! Their team's communication, creativity, and expertise were top-notch. They crafted a visually stunning and user-friendly website that perfectly aligned with my business goals. Since launching, I've seen a noticeable increase in web traffic and inquiries. I highly recommend MUSE for anyone seeking exceptional website development services!</p>
                    <p className={styles.p} >-Backbone</p>
                </div>
            </section>
        </div>

        <div className={styles.cardContainer}>
            <section className={styles.section} id={styles.three}>
               <div className={styles.headline}>
                    <h1>LET'S START A PROJECT!</h1>
                </div>

                <div className={styles.infoBox}>
                    <div className={styles.info}>
                        <Input.Wrapper label="NAME" withAsterisk description="" error="" className={styles.input}>
                            <Input placeholder="name" />
                        </Input.Wrapper>
                        <Input.Wrapper label="COMPANY" withAsterisk description="" error="" className={styles.input}>
                            <Input placeholder="company" />
                        </Input.Wrapper>
                        <Input.Wrapper label="EMAIL" withAsterisk description="" error="" className={styles.input}>
                            <Input placeholder="Your email"/>
                        </Input.Wrapper>
                        <Input.Wrapper label="PHONE" withAsterisk description="" error="" className={styles.input}>
                            <Input component={IMaskInput} mask="+45 0000 0000" placeholder="(+45)Your phone" />
                        </Input.Wrapper>
                    </div>

                    <div className={styles.request}>
                        <Input.Wrapper label="TELL US ABOUT YOUR CHALLENGES" withAsterisk description="" error="" className={styles.textInput} >
                            <Textarea placeholder="text" />
                        </Input.Wrapper>
                        
                        <Link href="" className={styles.button}>
                            <p className={styles.buttonText}>LET'S GET IN TOUCH</p>
                        <IoArrowUpSharp className={styles.arrowIcon}/>
                    </Link>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}
