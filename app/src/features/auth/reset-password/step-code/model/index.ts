import { useState } from "react";

interface IUseStepCodeFormParams {
    onSuccess: (confirmation_code: string) => void;
}

export const useStepCodeForm = ({ onSuccess }: IUseStepCodeFormParams) => {
    const [otp, setOtp] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSuccess(otp);
    };

    return {
        otp,
        setOtp,
        handleSubmit,
    };
};
