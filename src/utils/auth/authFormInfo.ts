export interface AuthFormInfo {
    username: string;
    plainPassword: string;
}

export interface LoginFormInfo extends AuthFormInfo {
    browserInfo: string;
}

export interface SignupFormInfo extends AuthFormInfo {
    email: string;
}