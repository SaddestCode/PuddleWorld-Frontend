import React, { useEffect, useState } from 'react';
import { COOKIES_KEY } from '../const';
import { LightbulbFill, Lightbulb } from 'react-bootstrap-icons';
import Cookies from 'js-cookie';

/**
 * An interactable lightbulb icon that toggles between dark and light theme;
 * (Edits the cookie flag, and reloads)
 * 
 * TODO: Maybe instead of reloading the whole page, have a popup that tells the user "change will be applied on next reload"?
 * @returns 
 */
const ThemeToggleIcon: React.FC = () => {
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    const savedTheme = Cookies.get(COOKIES_KEY.THEME);

    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    console.log("test");
    const newTheme = theme === 'light' ? 'dark' : 'light';
    Cookies.set(COOKIES_KEY.THEME, newTheme)

    setTheme(newTheme);
    window.location.reload();
  };

  return (
    <div onClick={toggleTheme} style={{ cursor: 'pointer' }}>
      {theme === 'light' ? (
        <LightbulbFill/>
      ) : (
        <Lightbulb/>
      )}
    </div>
  );
};

export default ThemeToggleIcon;