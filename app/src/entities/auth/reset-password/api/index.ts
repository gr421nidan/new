import { api } from "@/shared/api";
import {
    IResetCodeRequest,
    IResetCodeResponse,
    IResetPasswordRequest,
    IResetPasswordResponse
} from "../type";


export const sendResetCode = async (
    data: IResetCodeRequest
): Promise<IResetCodeResponse> => {
    const response = await api.post<IResetCodeResponse>("/user/send-reset-code", data);
    return response.data;
};


export const resetPassword = async (
    data: IResetPasswordRequest
): Promise<IResetPasswordResponse> => {
    const response = await api.patch<IResetPasswordResponse>("/user/reset-password", data);
    return response.data;
};
