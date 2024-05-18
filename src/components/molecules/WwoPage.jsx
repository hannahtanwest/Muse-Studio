import React from 'react'
import styles from './WwoPage.module.css'

export default function Wwopage ({introHeadlineText, introText, workflowHeadlineText, imageUrlOne, imageUrlTwo, progImgFour, progImgOne, progImgThree, progImgTwo, progHeadlineText, progInfoText, video}){
    return(
        <div className={styles.container}>

            <div className={styles.intro}>
                <div className={styles.introLeft}>
                    <h1 className={styles.headline}>{introHeadlineText}</h1>
                    <p className={styles.infoText}>{introText}</p>
                </div>

                <div className={styles.images}>
                    <img src={imageUrlOne} className={styles.img} width={600}/>
                    <video src={video} className={styles.video} autoPlay muted loop/>
                </div>    
            </div>



            <div className={styles.programs}>
                <div className={styles.progImages}>
                    <img src={progImgOne} className={styles.progImg}/>
                    <img src={progImgTwo} className={styles.progImg}/>
                    <img src={progImgThree} className={styles.progImg}/>
                    <img src={progImgFour} className={styles.progImg}/>
                </div>

                <div className={styles.progInfo}>
                    <h1 className={styles.headline}>{progHeadlineText}</h1>
                    <p className={styles.progInfoText}>{progInfoText}</p>
                </div>

            </div>
        </div>
    )
}
