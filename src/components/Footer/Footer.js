import React from 'react'
import styles from './Footer.module.css'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export default function Footer () {
    return (
        <div className={styles.footerWrapper}>
            <div className={styles.row}>
                <div className={styles.column}>
                    <ul>
                        <li>About  Us</li>
                        <li>Delivery Information</li>
                        <li>Returns & Exchange</li>
                        <li>Technical & Privacy</li>
                        <li>Order Status</li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <div className={styles.socialWrapper}>
                        <ul>
                            <li className={`${styles.brandName}`}>MADE UP</li>
                            <li>Stay in touch with us</li>
                            <li className={styles.socialIcons}>
                                <span><AiOutlineFacebook /></span>
                                <span><AiOutlineInstagram /></span>
                                <span><AiOutlineYoutube /></span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.column}>
                    <ul>
                        <li>
                            <div>Our Corporate Office</div>
                            <div>No: 7,A2B road, Adayar Rajpuram, T-Nagar, Chennai - 642002.</div>
                        </li>
                        <li>
                            <div><span className={styles.icons}><HiOutlineMail /></span>sales@madeup.com</div>
                            <div><span className={styles.icons}><HiOutlinePhone /></span>044 9999 9999</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
