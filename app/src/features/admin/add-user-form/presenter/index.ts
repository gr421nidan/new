import useSignInUseCase from "@/entities/admin/add-user/use-case";
import {useForm} from "react-hook-form";
import {IFormAddUserData} from "@/shared/type/admin/add-user";
import {yupResolver} from "@hookform/resolvers/yup";
import validationSchema from "@/features/admin/add-user-form/validation-add-user-form";

const useAddUserPresenter = () => {
    const { register, handleSubmit, formState: { errors }, setError } = useForm<IFormAddUserData>({
        resolver: yupResolver(validationSchema),
    });
    const {mutateAsync} = useSignInUseCase(setError);
    const onSubmit = handleSubmit(async (data: IFormAddUserData) => {
        const formattedData = {
            ...data,
            grant_id: Number(data.grant_id),
        };
        await mutateAsync(formattedData);
    })

    return {
        register,
        onSubmit,
        errors,
    };
};
export default useAddUserPresenter;