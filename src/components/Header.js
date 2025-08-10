'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeContext';

export default function Header() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">
              DJReklesz IPTV
            </h1>
          </div>
          
          <button
            onClick={toggleTheme}
            className="button p-2 rounded-lg hover:opacity-80 transition-opacity duration-200"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-gray-600" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
