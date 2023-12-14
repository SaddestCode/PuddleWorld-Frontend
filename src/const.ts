export const COOKIES_KEY = {
    THEME: "theme",
    SESSION_TOKEN: "session_token",
    DISPLAY_NAME: "display_name",
    USERNAME: "username"
};

const BASE_API_ROUTE = "http://localhost:3000";
export const API_ROUTES = {
    USER_SIGNUP: BASE_API_ROUTE + "/user/signup",
    USER_LOGIN: BASE_API_ROUTE + "/user/login"
}