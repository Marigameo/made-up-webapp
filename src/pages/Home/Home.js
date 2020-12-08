import React from 'react'
import styles from './Home.module.css'
import Slider from '../../components/Slider/Slider'
export default function Home () {
    return (
        <>
            <div className={styles.heroContainer}>
                <div className={styles.heroBanner} />
                <div className={styles.mainRow}>
                    <div className={styles.columnOne} />
                    <div className={styles.columnTwo}>
                        <div className={styles.asideImageTop} />
                        <div className={styles.asideImageBottom}>
                        </div>
                    </div>
                </div>
            </div>
            <Slider />
        </>
    )
}
