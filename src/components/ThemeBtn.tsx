'use client'

import Image from 'next/image';
import sunIcon from '@/images/icon-sun.svg';
import moonIcon from '@/images/icon-moon.svg';
import styles from './ThemeBtn.module.css';
import { useTheme } from '@/hooks/useTheme';

export default function ThemeBtn() {
    const [darkTheme, updateDarkTheme] = useTheme();

    return (
        <div className={styles.container}>
            <label className={styles.label} htmlFor="light-theme" aria-label='light theme'>
                <Image src={sunIcon} alt="light theme" />
            </label>
            <div className={styles['toggle-btns']}>
                <input 
                    className={styles.light}
                    value="light" 
                    name="toggle-btn" 
                    type="radio" 
                    id="light-theme" 
                    onChange={() => updateDarkTheme(false)}
                    checked={darkTheme === false}
                />
                <input 
                    className={styles.dark}
                    value="dark" 
                    name="toggle-btn" 
                    type="radio" 
                    id="dark-theme" 
                    onChange={() => updateDarkTheme(true)}
                    checked={darkTheme === true}
                />
                <div className={styles.switcher}></div>
            </div>
            <label className={styles.label} htmlFor="dark-theme" aria-label='dark theme'>
                <Image src={moonIcon} alt="dark theme" />
            </label>
        </div>
    )
}