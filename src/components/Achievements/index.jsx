import React from 'react'
import styles from './Achievements.module.scss'
import rectanglesIcon from '../../assets/images/red-rectangles.png'
import { AchievementsCard } from './AchievementsCard'
import icon from '../../assets/images/achievements-card-icon.png'

export const Achievements = () => {
    return (
        <section className={`container ${styles.section}`}>
            <div className={styles.textWrapper}>
                <h2 className={styles.title}>наши достижения от кубка россии до чемпионатов мира</h2>
                <img src={rectanglesIcon} alt="rectangles icon" className={styles.rectanglesIcon} />
                <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant tincidunt aliquam tincidunt pretium sodales. Tristique odio pellentesque et tincidunt posuere arcu purus lobortis risus. Urna, ut amet odio orci magnis praesent ultrices. Praesent malesuada lacus tellus tristique sit at. Sed viverra nulla nam arcu, non iaculis pretium, volutpat. </p>
            </div>
            <div className={styles.cards}>
                <div className={styles.divColumn1}>
                    <AchievementsCard title='#1' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ' />
                    <AchievementsCard title='#3' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ' />
                    <AchievementsCard title='#5' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ' />
                    <AchievementsCard title='#7' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ' />
                </div>
                <div className={styles.divColumn2}>
                    <AchievementsCard title='#2' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ' />
                    <AchievementsCard title='#4' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ' />
                    <AchievementsCard title='#6' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ' />
                    <AchievementsCard icon={icon} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ' />
                </div>
            </div>
        </section>
    )
}
