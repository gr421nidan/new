import { useMutation } from "@tanstack/react-query";
import { sendResetCode, resetPassword } from "../api";
import {
    IResetCodeRequest,
    IResetCodeResponse,
    IResetPasswordRequest,
    IResetPasswordResponse
} from "../type";
import ERouterPath from "@/shared/common/enum/router";
import {useNavigate} from "react-router-dom";


export const useSendResetCodeMutation = (setError: any) => {
    return useMutation<IResetCodeResponse, Error, IResetCodeRequest>({
        mutationFn: sendResetCode,
        onSuccess: (data) => {
            console.log("Код сброса успешно отправлен:", data.message);
        },
        onError: (error: any) => {
            if (error.response?.status === 404 && error.response?.data?.type === "not_found" && (error.response?.data?.property === "email")) {
                setError("email", {
                    type: "manual",
                    message: error.response?.data?.message
                });
                }
        }
    });
};

export const useResetPasswordMutation = (setError: any) => {
    const navigate = useNavigate();
    return useMutation<IResetPasswordResponse, Error, IResetPasswordRequest>({
        mutationFn: resetPassword,
        onSuccess: (data) => {
            console.log("Пароль успешно обновлён:", data.message);
            navigate(ERouterPath.SIGN_IN_PAGE, { replace: true });
        },
        onError: (error: any) => {
            if (error.response?.status === 404 && error.response?.data?.type === "not_found" && (error.response?.data?.property === "confirmation_code")) {
                setError("password", {
                    type: "manual",
                    message: error.response?.data?.message
                });
            }
            setError("newPassword", {
                type: "manual",
                message: error.response?.data?.message || "Ошибка при сбросе пароля"
            });
        }
    });
};
