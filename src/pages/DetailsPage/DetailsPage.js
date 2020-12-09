import React from 'react'
import styles from './DetailsPage.module.css'
import Profile from '../../assets/images/profile-pic.png'
import { FiChevronRight, FiChevronUp } from "react-icons/fi";
import ProfilePage from '../../components/Profile/Profile'
import OrdersPage from '../../components/Orders/Orders'
import Link from '../../components/Link'
import './accordian.css'

export default function DetailsPage ({ profileChecked, ordersChecked }) {
    return (
        <>
            <div className={`${styles.container} + " " + ${styles.largeScreensOnly}`}>
                <aside className={styles.asideNav}>
                    <div className={styles.profileContainer}>
                        <img src={Profile} alt="prifle-pic" className={styles.img}></img>
                        <span className={styles.details}>
                            <div className={styles.name}>Grishk</div>
                            <div className={styles.email}>griiskaim@gmail.com</div>
                        </span>
                    </div>
                    <nav className={styles.listWrapper}>
                        <ul className={styles.navList}>
                            <Link href="/profile">
                                <li className={profileChecked ? `${styles.navItemWrapper} + " " + ${styles.profileIndicator}` : styles.navItemWrapper}>
                                    <div className={styles.navContent}>
                                        <div className={styles.title}>
                                            My Profile
                                    </div>
                                        <div className={styles.secondaryText}>
                                            Notifications, password
                                    </div>
                                    </div>
                                    <span><FiChevronRight /></span>
                                </li>
                            </Link>
                            <Link href="/orders">
                                <li className={ordersChecked ? `${styles.navItemWrapper} + " " + ${styles.ordersIndicator}` : styles.navItemWrapper}>
                                    <div className={styles.navContent}>
                                        <div className={styles.title}>
                                            My orders
                                </div>
                                        <div className={styles.secondaryText}>
                                            Already have 12 orders
                                </div>
                                    </div>
                                    <span><FiChevronRight /></span>
                                </li>
                            </Link>
                            <li className={styles.navItemWrapper}>
                                <div className={styles.navContent}>
                                    <div className={styles.title}>
                                        Shipping addresses
                                </div>
                                    <div className={styles.secondaryText}>
                                        3 addresses
                                </div>
                                </div>
                                <span><FiChevronRight /></span>
                            </li>
                        </ul>
                    </nav>
                </aside>
                <section className={styles.informationWrapper}>
                    {window.location.pathname === '/profile' ? <ProfilePage /> : <OrdersPage />}
                </section>
            </div>
            <div className={`${styles.accordian} + " " + ${styles.smallScreensOnly}`}>
                <div className={styles.profileContainer}>
                    <img src={Profile} alt="prifle-pic" className={styles.img}></img>
                    <span className={styles.details}>
                        <div className={styles.name}>Grishk</div>
                        <div className={styles.email}>griiskaim@gmail.com</div>
                    </span>
                </div>
                <ul className="accordion css-accordion">
                    <li className="accordion-item">
                        <input className="accordion-item-input" type="checkbox" name="accordion" id="item1" defaultChecked={profileChecked} />
                        <label htmlFor="item1" className="accordion-item-hd">
                            <div className={styles.navContent}>
                                <div className={styles.title}>
                                    My Profile
                                    </div>
                                <div className={styles.secondaryText}>
                                    Notifications, password
                                    </div>
                            </div>
                            <span className="accordion-item-hd-cta"><FiChevronUp /></span>
                        </label>
                        <div className="accordion-item-bd"><ProfilePage /></div>
                    </li>
                    <li className="accordion-item">
                        <input className="accordion-item-input" type="checkbox" name="accordion" id="item2" defaultChecked={ordersChecked} />
                        <label htmlFor="item2" className="accordion-item-hd">
                            <div className={styles.navContent}>
                                <div className={styles.title}>
                                    My orders
                                </div>
                                <div className={styles.secondaryText}>
                                    Already have 12 orders
                                </div>
                            </div>
                            <span className="accordion-item-hd-cta"><FiChevronUp /></span>
                        </label>
                        <div className="accordion-item-bd"><OrdersPage /></div>
                    </li>
                    <li className="accordion-item">
                        <input className="accordion-item-input" type="checkbox" name="accordion" id="item3" />
                        <label htmlFor="item3" className="accordion-item-hd">
                            <div className={styles.navContent}>
                                <div className={styles.title}>
                                    Shipping addresses
                                </div>
                                <div className={styles.secondaryText}>
                                    3 addresses
                                </div>
                            </div>
                            <span className="accordion-item-hd-cta"><FiChevronUp /></span>
                        </label>
                        <div className="accordion-item-bd">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex consequuntur architecto maxime, saepe repudiandae quidem quisquam aliquam cumque possimus inventore, deserunt nostrum, explicabo modi voluptatibus sed, labore quaerat. Accusamus, officiis. </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
