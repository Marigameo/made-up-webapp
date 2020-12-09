import React from 'react'
import styles from './Testimonial.module.css'
import { AiFillStar } from "react-icons/ai";

export default function Testimonial () {
    return (
        <div className={styles.testimonialWrapper}>
            <div className={styles.testimonialHeading}>TESTIMONIALS</div>
            <div className={styles.testimonialList}>
                <div className={styles.testimonial}>
                    <div className={styles.header}>
                        <span className={styles.name}>Vikas</span>
                        <span className={styles.rating}>
                            <span className={styles.stars}><AiFillStar /></span>
                            <span className={styles.stars}><AiFillStar /></span>
                            <span className={styles.stars}><AiFillStar /></span>
                            <span className={styles.stars}><AiFillStar /></span>
                            <span className={styles.stars}><AiFillStar /></span>
                        </span>
                    </div>
                    <div className={styles.testimonialText}>
                        Love the cloth material! So breezy and comfortable. Really durable as well. I must say the jeans I bought was worth the price.
                    </div>
                </div>
                <div className={styles.testimonial}>
                    <div className={styles.header}>
                        <span className={styles.name}>Vikas</span>
                        <span className={styles.rating}>
                            <span className={styles.stars}><AiFillStar /></span>
                            <span className={styles.stars}><AiFillStar /></span>
                            <span className={styles.stars}><AiFillStar /></span>
                            <span className={styles.stars}><AiFillStar /></span>
                            <span className={styles.stars}><AiFillStar /></span>
                        </span>
                    </div>
                    <div className={styles.testimonialText}>
                        Love the cloth material! So breezy and comfortable. Really durable as well. I must say the jeans I bought was worth the price.
                    </div>
                </div>
                <div className={styles.testimonial}>
                    <div className={styles.header}>
                        <span className={styles.name}>Vikas</span>
                        <span className={styles.rating}>
                            <span className={styles.stars}><AiFillStar /></span>
                            <span className={styles.stars}><AiFillStar /></span>
                            <span className={styles.stars}><AiFillStar /></span>
                            <span className={styles.stars}><AiFillStar /></span>
                            <span className={styles.stars}><AiFillStar /></span>
                        </span>
                    </div>
                    <div className={styles.testimonialText}>
                        Love the cloth material! So breezy and comfortable. Really durable as well. I must say the jeans I bought was worth the price.
                    </div>
                </div>
            </div>
        </div>
    )
}
