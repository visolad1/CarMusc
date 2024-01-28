import React from 'react'
import styles from './AchievementsSlider.module.scss'
import sliderBtnIcon from '../../assets/images/slider-btn.png'

export const AchievementasSliderBtnNext = ({ onClick }) => {
    return (
        <button className={`${styles.sliderBtn} ${styles.sliderBtnNext}`} onClick={onClick}>
            <img src={sliderBtnIcon} alt="icon" />
        </button>
    )
}
