import React from 'react'
import { MENU } from '../../utils'
import styles from './Header.module.scss'
import { AnimatePresence, motion } from "framer-motion";

export const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <AnimatePresence>
                {MENU.map(({ name, link }) => (
                    <motion.div animate={{ x: 100 }} key={'nav' + name} className={styles.navItem}>
                        <a href={link}>{name}</a>
                    </motion.div>
                ))
                }
            </AnimatePresence>
        </nav >
    )
}
