/**
 * NOTE: Only works with react, don't use it in astro...
 */

import Cookies from 'js-cookie';
import { COOKIES_KEY } from '@/const';

export function getSessionCookie(): string | undefined {
    const savedToken = Cookies.get(COOKIES_KEY.SESSION_TOKEN);

    return savedToken;
}

export function getDisplayNameCookie(): string | undefined {
    const savedName = Cookies.get(COOKIES_KEY.LOGGED_IN_DISPLAY_NAME);

    return savedName;
}

export function setSessionCookie(sessionToken: string, displayName: string) {
    Cookies.set(COOKIES_KEY.LOGGED_IN_DISPLAY_NAME, displayName);
    Cookies.set(COOKIES_KEY.SESSION_TOKEN, sessionToken);
}

export function removeSessionCookie(){
    Cookies.remove(COOKIES_KEY.LOGGED_IN_DISPLAY_NAME);
    Cookies.remove(COOKIES_KEY.SESSION_TOKEN)
}