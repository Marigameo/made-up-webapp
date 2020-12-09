import React from 'react'
import styles from './Home.module.css'
import Slider from '../../components/Slider/Slider'
import Testimonial from '../../components/Testimonial/Testimonial'
import Newsletter from '../../components/Newsletter/Newsletter'

export default function Home () {
    return (
        <>
            {/* Hero banner section */}
            <div className={styles.heroContainer}>
                <div className={styles.heroBanner}>
                    <div className={styles.heroTextL1}>
                        Clothes that <span className={styles.primaryText}>respire</span>
                    </div>
                    <div className={styles.heroTextL2}>
                        for men who <span className={styles.primaryText}>aspire</span>
                    </div>
                    <div className={styles.heroButton}>
                        BROWSE COLLECTIONS
                    </div>
                </div>
                <div className={styles.mainRow}>
                    <div className={styles.columnOne}>
                        <div className={styles.heroTextL1}>
                            <span className={styles.primaryText}>Summer</span>is here and
                        </div>
                        <div className={styles.heroTextL2}>
                            so is our <span className={styles.primaryText}>collection</span>
                        </div>
                    </div>
                    <div className={styles.columnTwo}>
                        <div className={styles.asideImageTop}>
                            <div className={styles.heroTextL1}>
                                <span className={styles.primaryText}>Wrinkle-free </span>t-shirts
                            </div>
                        </div>
                        <div className={styles.asideImageBottom}>
                            <div className={styles.heroTextL1}>
                                <span className={styles.primaryText}>Stain-free </span>denim shirts
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* slider section */}
            <Slider />
            {/* testimonial section */}
            <Testimonial />
            {/* newsletter section */}
            <Newsletter />
        </>
    )
}
