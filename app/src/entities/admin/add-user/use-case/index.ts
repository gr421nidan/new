import {useMutation} from "@tanstack/react-query";
import {IApiErrorDto} from "@/shared/type/auth";
import {AxiosError} from "axios";
import addUser from "@/entities/admin/add-user/api";
import {IAddUserDto, IAddUserPort} from "@/shared/type/admin/add-user";

const useSignInUseCase = (setError: any) => {
    return useMutation<IAddUserDto, AxiosError<IApiErrorDto>, IAddUserPort>({
        mutationFn: addUser,
        onSuccess: (data) => {

        },
        onError: (error: AxiosError<IApiErrorDto>) => {
        }
    });
};

export default useSignInUseCase;