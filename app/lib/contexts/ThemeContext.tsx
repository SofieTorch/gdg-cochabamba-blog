"use client";
import React, { createContext, useState, useContext, useEffect, type ReactNode } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
    theme: Theme;
    toggle: () => void;
};

const defaultState: ThemeContextType = {
    theme: 'light',
    toggle: () => {
        throw new Error("toggle function must be overridden by ThemeContextProvider");
    },
};

export const ThemeContext = createContext<ThemeContextType>(defaultState);

type ThemeContextProviderProps = {
    children: ReactNode;
};

const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
        const storedTheme = localStorage.getItem('theme') as Theme;
        return storedTheme || 'light';
    }
}
export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
    const [mounted, setMounted] = useState(false);
    const [theme, setTheme] = useState<Theme>(() => getInitialTheme()!);

    const toggle = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            <div className={theme}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);

