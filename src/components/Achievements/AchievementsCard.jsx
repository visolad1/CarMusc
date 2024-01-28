import React from 'react'
import styles from './Achievements.module.scss'

export const AchievementsCard = ({ title, icon, text }) => {
    return (
        <div className={styles.card}>
            {icon ? <img src={icon} className={styles.cardImg} /> : <h4 className={styles.cardTitle}>{title}</h4>}
            <p className={styles.cardText}>{text}</p>
        </div>
    )
}
