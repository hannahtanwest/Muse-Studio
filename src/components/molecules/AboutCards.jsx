import React from 'react'
import styles from './AboutCards.module.css'
import Image from 'next/image'
import hannah from '/public/hannah.jpg'
import clara from '/public/clara-about.jpeg'

export default function AboutCards() {
  return (
    <div className={styles.container}>
        <div className={styles.cardContainer}>
            <section className={styles.section} id={styles.one}>
                <div className={styles.ourJobInfo}>
                    <h1 className={styles.headline}>OUR JOB</h1>
                    <p className={styles.p}>
                        We provide a wide spectrum of expertise within the multimedia world. Everything from content creation, user experience, and web development. We cater to your needs and desires and will do everything in our power to deliver products that meet your and your brand's standards. With years of experience in the multimedia industry, we at Muse Studio have honed our skills to perfection. 
                    </p>
                </div>

                <div className={styles.rightSide}>
                    <p className={styles.p}>
                        Our team brings a wealth of expertise in content creation, user experience design, and web development. We have successfully delivered high-quality projects for a diverse range of clients, meeting their unique needs and exceeding their expectations. Whether it's crafting compelling visuals, optimizing user interfaces, or building innovative websites, we have the knowledge and creativity to bring your ideas to life. Trust us to deliver exceptional results that elevate your brand and leave a lasting impression on your audience 
                    </p>
                </div>
            </section>
        </div>

        <div className={styles.cardContainer}>
            <section className={styles.section} id={styles.two}>
                <div className={styles.ourJobInfo}>
                    <h1 className={styles.headline}>MEET HANNAH</h1>
                    <p className={styles.p}>
                        Hannah is a passionate and creative multimedia designer who's expertise ranges from frontend development to content creation, and she is dedicated to creating visually stunning and engaging solutions.
                    </p>

                    <div className={styles.categories}>
                        <p className={styles.category}>FRONTEND</p>
                        <p className={styles.category}>UX-DESIGNER</p>
                        <p className={styles.category}>CONTENT CREATOR</p>
                    </div>
                </div>

                <div className={styles.rightSide}>
                    <Image src={hannah} alt='Hannah' width={380} className={styles.hannah} />
                </div>
            </section>
        </div>

        <div className={styles.cardContainer}>
            <section className={styles.section} id={styles.three}>
                <div className={styles.rightSide}>
                    <Image src={clara} alt='Clara' width={380} className={styles.clara}/>
                </div>

                <div className={styles.ourJobInfo}>
                    <h1 className={styles.headline}>MEET CLARA</h1>
                    <p className={styles.p}>
                        Clara is a passionate and creative multimedia designer with a deep understanding of digital content and user experience. She is committed to delivering innovative and user-friendly products that meet customers' needs and expectations.
                    </p>
                    
                    <div className={styles.categories}>
                        <p className={styles.category}>FRONTEND</p>
                        <p className={styles.category}>UX-DESIGNER</p>
                        <p className={styles.category}>CONTENT CREATOR</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}
