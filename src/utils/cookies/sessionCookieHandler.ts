/**
 * NOTE: Only works with react, don't use it in astro...
 */

import Cookies from 'js-cookie';
import { COOKIES_KEY } from '@/const';

export interface SessionCookie {
    token: string;
    username: string;
    displayName: string;
}

export function getSessionCookie(): SessionCookie | undefined {
    const savedToken = Cookies.get(COOKIES_KEY.SESSION_TOKEN);
    const savedDisplayName = Cookies.get(COOKIES_KEY.DISPLAY_NAME);
    const savedUsername = Cookies.get(COOKIES_KEY.USERNAME);

    if (!savedToken || !savedDisplayName || !savedUsername) {
        return undefined;
    }

    return {
        token: savedToken,
        displayName: savedDisplayName,
        username: savedUsername
    }
}

export function setSessionCookie(session: SessionCookie) {
    Cookies.set(COOKIES_KEY.DISPLAY_NAME, session.displayName);
    Cookies.set(COOKIES_KEY.SESSION_TOKEN, session.displayName);
    Cookies.set(COOKIES_KEY.USERNAME, session.username);
}

export function removeSessionCookie(){
    Cookies.remove(COOKIES_KEY.DISPLAY_NAME);
    Cookies.remove(COOKIES_KEY.SESSION_TOKEN)
    Cookies.remove(COOKIES_KEY.USERNAME);
}