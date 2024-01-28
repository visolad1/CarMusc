import React from 'react'
import Slider from 'react-slick'
import styles from './AchievementsSlider.module.scss'
import slideImg1 from '../../assets/images/achievements-slider-img-1.png'
import slideImg2 from '../../assets/images/achievements-slider-img-2.png'
import slideImg3 from '../../assets/images/achievements-slider-img-3.png'
import { AchievementasSliderBtnNext } from './AchievementasSliderBtnNext'
import { AchievementasSliderBtnPrev } from './AchievementasSliderBtnPrev'


export const AchievementsSlider = () => {
    const sliderImgs = [slideImg1, slideImg2, slideImg3]
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <AchievementasSliderBtnNext />,
        prevArrow: <AchievementasSliderBtnPrev />
    }
    return (
        <section className={`container ${styles.sliderContainer}`}>
            <Slider {...settings}>
                {sliderImgs.map(img => (
                    <div className={styles.slide}>
                        <img src={img} alt='slide img' className={styles.slideImg} />
                        <p className={styles.slideText}></p>
                    </div>
                ))}
            </Slider>
        </section>
    )
}
