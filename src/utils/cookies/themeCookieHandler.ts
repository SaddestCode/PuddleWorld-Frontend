/**
 * NOTE: Only works with react, don't use it in astro...
 */

import Cookies from 'js-cookie';
import { COOKIES_KEY } from '@/const';
import type { Theme } from 'react-toastify';

export function getThemeCookie(): Theme {
    const savedTheme = Cookies.get(COOKIES_KEY.THEME);

    if (!savedTheme) {
      return 'light';
    }

    return savedTheme as Theme;
}

export function setThemeCookie(newTheme: Theme) {
    Cookies.set(COOKIES_KEY.THEME, newTheme);
}