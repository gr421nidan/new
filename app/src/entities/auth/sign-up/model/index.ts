import {useMutation} from "@tanstack/react-query";
import {signUpUser} from "../api";
import {IApiErrorResponse, ISignUpData, ISignUpResponse} from "../type";
import {useNavigate} from "react-router-dom";
import ERouterPath from "@/shared/common/enum/router";
import {AxiosError} from "axios";

export const useSignUpMutation = (setError: any) => {
    const navigate = useNavigate();

    return useMutation<
        ISignUpResponse, AxiosError<IApiErrorResponse>, ISignUpData>({
        mutationFn: signUpUser,
        onSuccess: () => {
            navigate(ERouterPath.SIGN_IN_PAGE, {replace: true});
        },
        onError: (error: AxiosError<IApiErrorResponse>) => {
            if (error.response?.status === 409 && error.response?.data?.type === "not_unique" && error.response?.data?.property === "email") {
                setError("email", {
                    type: "manual",
                    message: error.response?.data?.message
                });
            }
        },
    });
};
