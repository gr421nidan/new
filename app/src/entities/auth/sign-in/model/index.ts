import {useMutation} from "@tanstack/react-query";
import {signInUser} from "../api";
import {ISignInData, ISignInResponse} from "../type";
import ERouterPath from "@/shared/common/enum/router";
import {useNavigate} from "react-router-dom";


export const useSignInMutation = (setError: any) => {
    const navigate = useNavigate();
    return useMutation<ISignInResponse, Error, ISignInData>({
        mutationFn: signInUser,
        onSuccess: (data) => {
            localStorage.setItem("accessToken", data.accessToken);
            navigate(ERouterPath.MAIN_PAGE, { replace: true });
        },
        onError: (error: any) => {
            if (error.response?.status === 404 && error.response?.data?.type === "not_found" && (error.response?.data?.property === "email" || error.response?.data?.property === "password")) {
                setError("email", {
                    type: "manual",
                    message: error.response?.data?.message
                });
                setError("password", {
                    type: "manual",
                    message: error.response?.data?.message
                });
            }
            if (error.response?.status === 429) {
                setError("password", {
                    type: "manual",
                    message: error.response?.data?.message
                });
            }
        },
    });
};