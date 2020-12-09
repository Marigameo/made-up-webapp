import React from 'react'
import styles from './Profile.module.css'

export default function Profile () {
    return (
        <div className={styles.formContainer}>
            <div className={styles.formHeading}>My Profile</div>
            <form className={styles.form}>
                <div className={styles.inputRow}>
                    <div className={styles.inputColumn}>
                        <input className={styles.input} type="text" placeholder="First name"></input>
                    </div>
                    <div className={styles.inputColumn}>
                        <input className={styles.input} type="text" placeholder="Last name"></input>
                    </div>
                </div>
                <div className={styles.inputRow}>
                    <input className={styles.input} type="email" placeholder="Email"></input>
                </div>
                <div className={styles.inputRow}>
                    <input className={styles.input} type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Phone number "></input>
                </div>
                <div className={styles.inputRow}>
                    <input className={styles.input} type="password" placeholder="Password"></input>
                </div>
                <div className={styles.inputRow}>
                    <input className={styles.input} type="password" placeholder="Confirm Password"></input>
                </div>
                <div className={styles.buttonWrapper}>
                    <button className={styles.button}>ADD NEW ADDRESS</button>
                </div>
            </form>
        </div>
    )
}
