import React from 'react'
import styles from './AchievementsSlider.module.scss'
import sliderBtnIcon from '../../assets/images/slider-btn.png'

export const AchievementasSliderBtnPrev = ({ onClick }) => {
    return (
        <button className={`${styles.sliderBtn} ${styles.sliderBtnPrev}`} onClick={onClick}>
            <img src={sliderBtnIcon} alt="icon" />
        </button>
    )
}
