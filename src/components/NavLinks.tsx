'use client'

import Link from 'next/link';
import { useState } from 'react';
import styles from './NavLinks.module.css'
import { usePathname } from 'next/navigation';

export default function NavLinks() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const path = usePathname()

    return (
        <>
            <button 
                className={styles['menu-btn']}
                aria-label={mobileMenuOpen ? 'open menu' : 'close menu'}
                aria-expanded={mobileMenuOpen ? true : false}
                onClick={() => setMobileMenuOpen(prev => !prev)}
            >
                { mobileMenuOpen                    
                    ? <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fillRule="evenodd"/></svg>
                    : <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fillRule="evenodd"/></svg>
                }
            </button>
            { mobileMenuOpen &&
                <nav className={`${styles['mobile-menu']} ${styles.menu}`}>
                    <ul>
                        <li><Link onClick={() => setMobileMenuOpen(false)} href='/'>Home</Link></li>
                        <li><Link onClick={() => setMobileMenuOpen(false)} href='/projects'>Projects</Link></li>
                        <li><Link onClick={() => setMobileMenuOpen(false)} href='/contact'>Contact</Link></li>
                    </ul>
                </nav>
            }
            <nav className={`${styles['desktop-menu']} ${styles.menu}`}>
                <ul>
                    <li className={path === '/' ? styles.active : ''}><Link href='/'>Home</Link></li>
                    <li className={path === '/projects' ? styles.active : ''}><Link href='/projects'>Projects</Link></li>
                    <li className={path === '/contact' ? styles.active : ''}><Link href='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </>
    )
}