'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize theme after mount to avoid hydration issues
  useEffect(() => {
    setMounted(true);
    
    // Get saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Determine initial theme
    let initialTheme = 'light';
    if (savedTheme) {
      initialTheme = savedTheme;
    } else if (prefersDark) {
      initialTheme = 'dark';
    }
    
    // Set initial state
    setIsDarkMode(initialTheme === 'dark');
  }, []);

  // Apply theme when state changes
  useEffect(() => {
    if (!mounted) return;
    
    const theme = isDarkMode ? 'dark' : 'light';
    
    // Update HTML classes
    if (isDarkMode) {
      document.documentElement.classList.remove('theme-light');
      document.documentElement.classList.add('theme-dark');
    } else {
      document.documentElement.classList.remove('theme-dark');
      document.documentElement.classList.add('theme-light');
    }
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [isDarkMode, mounted]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
