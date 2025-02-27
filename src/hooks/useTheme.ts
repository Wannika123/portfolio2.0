'use client'

import { useEffect, useState } from "react"

export function useTheme() {
    const [darkTheme, setDarkTheme] = useState(false);

    const key = 'dark-theme';

    const updateDarkTheme = (dark: boolean) => {
        setDarkTheme(dark);

        localStorage.setItem(key, dark.toString());
        document.documentElement.className = dark ? 'dark' : 'light'
    }

    useEffect(() => {
        let initialTheme: boolean;

        const savedTheme = window.localStorage.getItem(key)
        if (savedTheme) {
            initialTheme = (savedTheme === 'true' ? true : false)
        } else {
            initialTheme = window.matchMedia('(prefers-color-scheme: dark)').matches 
                ? true
                : false    
        }
        
        setDarkTheme(initialTheme);
        localStorage.setItem(key, initialTheme.toString());
        document.documentElement.className = initialTheme ? 'dark' : 'light';
    }, [])

    return [darkTheme, updateDarkTheme] as [boolean, typeof updateDarkTheme]
}