import React, { useState } from 'react'
import Link from '../Link'
import styles from './Navbar.module.css'
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";

export default function Navbar () {
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);
    const closeNav = () => {
        console.log('called')
        setMobileNavOpen(false)
    }
    const openNav = () => {
        setMobileNavOpen(true)
    }
    return (
        <div className={styles.container}>
            <div className={!isMobileNavOpen ? `${styles.overlay} + ' ' + ${styles.hide}` : `${styles.overlay} + ' ' + ${styles.show}`} id="overlay">
                <div className={styles.closebtn} onClick={closeNav}>&times;</div>
                <nav className={styles.overlayContent}>
                    <ul>
                        <li className={`${styles.menuItemActive} + ' ' + ${styles.mediumText}`}><Link href="#">MY PROFILE</Link></li>
                        <li className={styles.mediumText}><Link href="#">MY WISHLIST</Link></li>
                        <li className={styles.mediumText}><Link href="#">MY ORDERS</Link></li>
                        <li className={styles.mediumText}><Link href="#">MY ADDRESS</Link></li>
                        <span className={styles.dividerContainer}>
                            <hr className={styles.divider} />
                        </span>
                        <li className={`${styles.menuItemActive} + ' ' + ${styles.normalText}`}><Link href="#">THE BRAND</Link></li>
                        <li className={styles.normalText}><Link href="#">THE MADE UP STORY</Link></li>
                        <li className={styles.normalText}><Link href="#">FRANCHISE AND SUPPLIERS</Link></li>
                        <li className={styles.normalText}><Link href="#">STORE LOCATOR</Link></li>
                    </ul>
                </nav>
            </div>
            <nav className={styles.navBarContainer}>
                <ul className={styles.leftMenu}>
                    <li className={`${styles.brandName}`}>MADE UP</li>
                </ul>
                <ul className={styles.rightMenu}>
                    <li className={`${styles.menuItems} + ' '+ ${styles.menuItemActive} + ' ' + ${styles.smallScreenHidden}`}> <Link href='/'>For me</Link></li>
                    <li className={`${styles.menuItems} + ' ' + ${styles.smallScreenHidden}`}><Link href='#'>Jeans</Link></li>
                    <li className={`${styles.menuItems} + ' ' + ${styles.smallScreenHidden}`}><Link href='#'>Shirts</Link></li>
                    <li className={`${styles.menuItems} + ' ' + ${styles.smallScreenHidden}`}><Link href='#'>T-shirts</Link></li>
                    <li className={`${styles.menuItems} + ' ' + ${styles.smallScreenHidden}`}><Link href='#'>Trousers</Link></li>
                    <li className={`${styles.menuItems} + ' ' + ${styles.smallScreenHidden}`}><Link href='#'>Joggers</Link></li>
                    <li className={`${styles.menuItems} + ' ' + ${styles.smallScreenHidden}`}><Link href='#'>Shorts</Link></li>
                    <li className={styles.menuIcons}><AiOutlineSearch /></li>
                    <li className={styles.menuIcons}><AiOutlineShoppingCart /></li>
                    <li className={`${styles.menuIcons} + ' ' + ${styles.smallScreenHidden}`}> <AiOutlineHeart /></li>
                    <li className={`${styles.menuIcons} + ' ' + ${styles.smallScreenHidden}`} id="user"><FaRegUser /></li>
                    <span className={`${styles.menuIcons} + ' ' + ${styles.smallScreenShow} + ' ' + ${styles.hamburger}`} onClick={openNav}>&#9776;</span>
                </ul>
            </nav>
        </div>
    )
}
