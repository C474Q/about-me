// ThemeToggle.jsx
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`min-w-[3vw] aspect-square flex items-center justify-center p-2 rounded-full transition-colors duration-300
                  ${isDarkMode ? 'bg-[#d6ccc4] text-[#787a79] hover:bg-[#780801] hover:text-[#d6ccc4] focus:ring-2 focus:ring-[#d6ccc4]'
                             : 'bg-[#a10a01] text-[#d6ccc4] hover:bg-[#d6ccc4] hover:text-[#787a79] focus:ring-2 focus:ring-[#464847]'}`}
      aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} className="h-5 w-5" />
    </button>
  );
};

export default ThemeToggle;