import React from 'react'
import styles from './Header.module.scss'


export const HeaderCard = ({ title, text }) => {
    return (
        <div className={styles.card}>
            <h4 className={styles.cardTitle}>{title}</h4>
            <p className={styles.cardText}>{text}</p>
        </div>
    )
}
