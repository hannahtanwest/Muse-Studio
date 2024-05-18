import React from 'react'
import styles from './ContactForm.module.css'
import { Input, Textarea } from '@mantine/core'
import {IMaskInput} from 'react-imask'
import Link from 'next/link'
import { IoArrowUpSharp } from "react-icons/io5";

export default function ContactForm() {
  return (
    <div className={styles.container}>
        <div className={styles.cardHeadline}>
            <h1 className={styles.headline}>FILL OUT THE FORM</h1>
        </div>

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
  )
}
