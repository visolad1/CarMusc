import React from 'react'
import styles from './Header.module.scss'
import { Navigation } from './Navigation';
import rectangles from '../../assets/images/red-rectangles.png'
import { HeaderCard } from './HeaderCard';

export const Header = () => {
    return (
        <section>
            <div className="container">
                <Navigation />
            </div>
            <main className={styles.main}>
                <div className={styles.mainText}>
                    <h1 className={styles.title}>CAR MUSC</h1>
                    <img src={rectangles} alt="icons" />
                    <p className={styles.text}>In-depth research, test drives, and expert opinions to guide your informed decisions when selecting a new car.</p>
                    <button className={styles.btn}>
                        <span className={styles.btnFilled}></span>
                        <span className={styles.btnText}>Наши услуги</span>
                    </button>
                </div>
            </main>
            <div className={styles.cards}>
                <HeaderCard title="адрес:" text="123 Main Street" />
                <HeaderCard title="телефон:" text="8 (812) 123-45-67 8-911-123-45-67 " />
                <HeaderCard title="Режим работы:" text="пн-пт : 10:00 - 20:00  сб-вск : 12:00 - 20:00" />
            </div>
        </section>
    )
}

