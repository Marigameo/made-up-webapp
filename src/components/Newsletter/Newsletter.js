import React from 'react'
import styles from './Newsletter.module.css'

export default function Newsletter () {
    return (
        <div className={styles.newsletterWrapper}>
            <div className={styles.newsLetterText}>
                GET COUPONS & STYLE GUIDES
            </div>
            <div className={styles.textSecondary}>
                Subscribe to our Newsletter
            </div>
            <div className={styles.form}>
                <input type="email" className={styles.input}></input>
                <button className={styles.subscribeButton}>SUBSCRIBE</button>
            </div>
        </div>
    )
}
