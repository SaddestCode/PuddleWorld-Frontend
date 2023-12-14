export interface AuthFormInfo {
    username: string;
    plainPassword: string;
    browserInfo: string;
}

export interface LoginFormInfo extends AuthFormInfo {
}

export interface SignupFormInfo extends AuthFormInfo {
}