export const COOKIES_KEY = {
    THEME: "theme",
    SESSION_TOKEN: "session_token",
    LOGGED_IN_DISPLAY_NAME: "logged_in_display_name"
};

const BASE_API_ROUTE = "http://localhost:3000";
export const API_ROUTES = {
    USER_SIGNUP: BASE_API_ROUTE + "/user/signup",
    USER_LOGIN: BASE_API_ROUTE + "/user/login"
}