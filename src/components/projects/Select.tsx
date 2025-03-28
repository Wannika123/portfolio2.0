'use client'

import { SelectContext } from "@/context/SelectContext";
import { useContext, useState, useEffect, useRef } from "react";
import arrowIcon from '@/images/icon-arrow.svg';
import checkIcon from '@/images/icon-check.svg';
import Image from "next/image";
import styles from './Select.module.css';

const VALUES = ["ReactJS", "TypeScript", "NextJS", "API", "Web Audio API", "Animation", "SCSS", "TailwindCSS"];

export default function Select() {
    const { selectedVals, selectAndRemoveValue, clearValues } = useContext(SelectContext);

    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(0);

    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.target != containerRef.current) return

            switch(e.code) {
                case "Enter":
                case "Space":
                    setIsOpen(prev => !prev)
                    if (isOpen) selectAndRemoveValue(selectedVals[highlightedIndex])
                    break;
                case "ArrowUp":
                case "ArrowDown": {  
                    if (!isOpen) {
                        setIsOpen(true);
                        break;
                    }
                    const newIndex = highlightedIndex + (e.code === "ArrowDown" ? 1 : -1);
                    if (newIndex >= VALUES.length) {
                        setHighlightedIndex(0)
                    } else if (newIndex < 0) {
                        setHighlightedIndex(VALUES.length - 1)
                    } else {
                        setHighlightedIndex(newIndex)
                    }
                    break;
                }
                case "Escape":
                    setIsOpen(false)
                    break;               
            }
        }
        containerRef.current?.addEventListener('keydown', handler);

        return () => {
            containerRef.current?.removeEventListener('keydown', handler);
        }
    }, [isOpen, highlightedIndex])

    return (
        <div 
            className={styles.container}
            tabIndex={0}
            onClick={() => setIsOpen(prev => !prev)}
            onBlur={() => setIsOpen(false)}
            ref={containerRef}
            aria-expanded={isOpen ? true : false}
        >
            <div className={styles['selected-values']}>
                {selectedVals.length === 0 && <span>Select...</span> }
                {selectedVals.map(val => (
                    <button 
                        key={val}
                        onClick={e => {
                            e.stopPropagation();
                            selectAndRemoveValue(val);   
                        }}
                        className={styles['value-badge']}
                    >
                        {val}
                        <span className={styles['remove-btn']}>&times;</span>
                    </button>
                ))}
            </div>
            <button 
                onClick={e => {
                    e.stopPropagation()
                    clearValues()
                }} 
                className={styles['clear-btn']}
            >
                &times;
            </button>
            <Image src={arrowIcon} alt="" className={isOpen ? styles['arrow-up'] : styles['arrow-down']} />
            <ul className={`${styles.values} ${isOpen ? styles.show : ''}`}>
                {VALUES.map((val, index) => (
                    <li 
                        onClick={e => {
                            e.stopPropagation()
                            selectAndRemoveValue(val)
                        }}
                        onMouseEnter={() => setHighlightedIndex(index)}
                        key={val} 
                        className={`${styles.value} ${highlightedIndex === index ? styles.highlighted : ''}`}
                    >
                        {selectedVals.includes(val) && <Image src={checkIcon} alt="checked" />}
                        {val}
                    </li>
                ))}
            </ul>
        </div>
    )
}