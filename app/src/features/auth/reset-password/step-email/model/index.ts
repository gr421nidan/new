import { useForm } from "react-hook-form";
import { useSendResetCodeMutation } from "@/entities/auth/reset-password/";

interface IFormData {
    email: string;
}

interface IUseStepEmailFormParams {
    onSuccess: (email: string) => void;
}

export const useStepEmailForm = ({ onSuccess }: IUseStepEmailFormParams) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<IFormData>();

    const { mutateAsync } = useSendResetCodeMutation(setError);

    const onSubmit = async (data: IFormData) => {
        await mutateAsync({ email: data.email });
        onSuccess(data.email);
    };

    return {
        register,
        handleSubmit,
        onSubmit,
        errors,
    };
};
