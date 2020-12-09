import React from 'react'
import styles from './Orders.module.css'
import denimModal from '../../assets/images/denim.png'

export default function Orders () {
    return (
        <div className={styles.ordersContainer}>
            <div className={styles.heading}>Pending Orders</div>
            <div className={styles.ordersListWrapper}>
                <ul className={styles.ordersList}>
                    <li className={styles.listItem}>
                        <div className={styles.image}>
                            <img className={styles.image} src={denimModal} alt="denim-shirt-model"></img>
                        </div>
                        <div className={styles.details}>
                            <div className={`${styles.orderId} + " " + ${styles.largeScreensOnly}`}>Order #12345678</div>
                            <span className={styles.smallScreensOnly}>
                                <div className={styles.listItem}>
                                    <div className={styles.orderId}>Order #12345678</div>
                                    <div className={styles.paymentType}>Cahs on delivery Rs.1899</div>
                                </div>
                            </span>
                            <div className={styles.name}>Madeup White Cotton Blend Checkered Slim Fit Shirt</div>
                            <div className={styles.deliveryDate}>Express Delivery by Sat, Aug 30</div>
                        </div>
                        <div className={styles.largeScreensOnly}>
                            <div className={styles.paymentType}>Credit Card Payment</div>
                            <div className={styles.amount}>Rs 1,899</div>
                            <div className={styles.control}></div>
                        </div>
                    </li>
                    <div className={styles.break}>
                        <hr className={styles.linebreak} />
                    </div>
                    <li className={styles.listItem}>
                        <div className={styles.image}>
                            <img className={styles.image} src={denimModal} alt="denim-shirt-model"></img>
                        </div>
                        <div className={styles.details}>
                            <div className={`${styles.orderId} + " " + ${styles.largeScreensOnly}`}>Order #12345678</div>
                            <span className={styles.smallScreensOnly}>
                                <div className={styles.listItem}>
                                    <div className={styles.orderId}>Order #12345678</div>
                                    <div className={styles.paymentType}>Cahs on delivery Rs.1899</div>
                                </div>
                            </span>
                            <div className={styles.name}>Madeup White Cotton Blend Checkered Slim Fit Shirt</div>
                            <div className={styles.deliveryDate}>Express Delivery by Sat, Aug 30</div>
                        </div>
                        <div className={styles.largeScreensOnly}>
                            <div className={styles.paymentType}>Credit Card Payment</div>
                            <div className={styles.amount}>Rs 1,899</div>
                            <div className={styles.control}></div>
                        </div>
                    </li>
                    <div className={styles.break}>
                        <hr className={styles.linebreak} />
                    </div>
                    <li className={styles.listItem}>
                        <div className={styles.image}>
                            <img className={styles.image} src={denimModal} alt="denim-shirt-model"></img>
                        </div>
                        <div className={styles.details}>
                            <div className={`${styles.orderId} + " " + ${styles.largeScreensOnly}`}>Order #12345678</div>
                            <span className={styles.smallScreensOnly}>
                                <div className={styles.listItem}>
                                    <div className={styles.orderId}>Order #12345678</div>
                                    <div className={styles.paymentType}>Cahs on delivery Rs.1899</div>
                                </div>
                            </span>
                            <div className={styles.name}>Madeup White Cotton Blend Checkered Slim Fit Shirt</div>
                            <div className={styles.deliveryDate}>Express Delivery by Sat, Aug 30</div>
                        </div>
                        <div className={styles.largeScreensOnly}>
                            <div className={styles.paymentType}>Credit Card Payment</div>
                            <div className={styles.amount}>Rs 1,899</div>
                            <div className={styles.control}></div>
                        </div>
                    </li>
                    <div className={styles.break}>
                        <hr className={styles.linebreak} />
                    </div>
                    <li className={styles.listItem}>
                        <div className={styles.image}>
                            <img className={styles.image} src={denimModal} alt="denim-shirt-model"></img>
                        </div>
                        <div className={styles.details}>
                            <div className={styles.orderId}>Order #12345678</div>
                            <div className={styles.name}>Madeup White Cotton Blend Checkered Slim Fit Shirt</div>
                            <div className={styles.deliveryDate}>Express Delivery by Sat, Aug 30</div>
                        </div>
                        <div className={styles.largeScreensOnly}>
                            <div className={styles.paymentType}>Credit Card Payment</div>
                            <div className={styles.amount}>Rs 1,899</div>
                            <div className={styles.control}></div>
                        </div>
                    </li>
                    <div className={styles.break}>
                        <hr className={styles.linebreak} />
                    </div>
                </ul>
            </div>
        </div>
    )
}
