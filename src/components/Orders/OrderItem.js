import React from 'react'
import orders from './OrderDetails'
import styles from './Orders.module.css'
import denimModal from '../../assets/images/denim.png'

export default function OrderItem () {

    //function to format price returned from json response (usually we get raw data unformatted), in indian currency format
    const formatPrice = (price) => {
        return price.toLocaleString('en-IN', {
            maximumFractionDigits: 2,
            style: 'currency',
            currency: 'INR'
        });
    }

    return (
        orders.map(({ id, order_id, item_name, delivery_date, payment_type, amount, status }) => {
            return (
                <>
                    <li key={id} className={styles.listItem}>
                        <div className={styles.image}>
                            <img className={styles.image} src={denimModal} alt="denim-shirt-model"></img>
                        </div>
                        <div className={styles.details}>
                            <div className={`${styles.orderId} + " " + ${styles.largeScreensOnly}`}>{`Order #${order_id}`}</div>
                            <span className={styles.smallScreensOnly}>
                                <div className={styles.listItem}>
                                    <div className={styles.orderId}>{`Order #${order_id}`}</div>
                                    <div className={styles.paymentType}>{payment_type}</div>
                                    <div className={styles.amount}>{formatPrice(amount)}</div>
                                </div>
                            </span>
                            <div className={styles.name}>{item_name}</div>
                            <div className={styles.deliveryDate}>{`Express Delivery by ${delivery_date}`}</div>
                        </div>
                        <div className={styles.largeScreensOnly}>
                            <div className={styles.paymentType}>{payment_type}</div>
                            <div className={styles.amount}>{formatPrice(amount)}</div>
                            <div className={styles.control}></div>
                        </div>
                    </li>
                    < div className={styles.break} >
                        <hr className={styles.linebreak} />
                    </div>
                </>
            )
        })
    )
}
