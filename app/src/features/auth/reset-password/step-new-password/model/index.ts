import { useForm } from "react-hook-form";
import { useResetPasswordMutation } from "@/entities/auth/reset-password";

interface IFormData {
    password: string;
    confirmPassword: string;
}

interface IUseStepNewPasswordFormParams {
    email: string;
    confirmation_code: string;
    onSuccess: () => void;
}

export const useStepNewPasswordForm = ({
                                           email,
                                           confirmation_code,
                                           onSuccess,
                                       }: IUseStepNewPasswordFormParams) => {
    const {
        register,
        handleSubmit,
        watch,
        getValues,
        formState: { errors },
        setError
    } = useForm<IFormData>({ mode: "onSubmit" });

    const { mutateAsync } = useResetPasswordMutation(setError);

    const onSubmit = async (data: IFormData) => {
        await mutateAsync({
            email,
            confirmation_code,
            password: data.password,
        });
        onSuccess();
    };

    const newPasswordValue = watch("password");

    return {
        register,
        handleSubmit,
        watch,
        getValues,
        errors,
        onSubmit,
        newPasswordValue,
    };
};
