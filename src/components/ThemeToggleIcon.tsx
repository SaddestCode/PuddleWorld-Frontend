import React, { useEffect, useState } from 'react';
import { LightbulbFill, Lightbulb } from 'react-bootstrap-icons';
import { getThemeCookie, setThemeCookie } from '@/utils/themeCookieHandler';
import { ToastContainer, toast } from 'react-toastify';

/**
 * An interactable lightbulb icon that toggles between dark and light theme;
 * (Edits the cookie flag, and reloads)
 */
const ThemeToggleIcon: React.FC = () => {
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
      setTheme(getThemeCookie());
  }, []);

  const toggleTheme = () => {
    const newTheme = (theme === 'light') ? 'dark' : 'light';
    setThemeCookie(newTheme);

    toast.success("👍 Your theme change will take effect on the next page or after refreshing!")
  };

  return (
    <>
      <div onClick={toggleTheme} style={{ cursor: 'pointer' }}>
        {theme === 'light' ? (
          <LightbulbFill/>
        ) : (
          <Lightbulb/>
        )}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={getThemeCookie()}
        />
    </>
  );
};

export default ThemeToggleIcon;