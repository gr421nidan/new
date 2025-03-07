export interface IResetCodeRequest {
    email: string;
}

export interface IResetCodeResponse {
    message: string;
}

export interface IResetPasswordRequest {
    email: string;
    confirmation_code: string;
    password: string;
}

export interface IResetPasswordResponse {
    message: string;
}
