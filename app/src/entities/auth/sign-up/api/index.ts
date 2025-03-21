import { api } from "@/shared/api";
import { ISignUpData, ISignUpResponse } from "../type";

export const signUpUser = async (data: ISignUpData): Promise<ISignUpResponse> => {
    try {
        const response = await api.post<ISignUpResponse>("/user/sign-up", data);
        return response.data;
    } catch (error: any) {
        throw error;
    }
};
