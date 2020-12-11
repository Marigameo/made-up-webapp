import React from 'react'
import OrderItem from './OrderItem'
import styles from './Orders.module.css'

export default function Orders () {
    return (
        <div className={styles.ordersContainer}>
            <div className={styles.heading}>Pending Orders</div>
            <div className={styles.ordersListWrapper}>
                <ul className={styles.ordersList}>
                    <OrderItem />
                </ul>
            </div>
        </div>
    )
}
