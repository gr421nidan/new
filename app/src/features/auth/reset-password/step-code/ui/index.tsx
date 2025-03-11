import React from "react";
import { useStepCodeForm } from "../model";
import { cn } from "@/shared/utils/cn";
import {
    formAuthStyles,
    formContainerStyles,
    headerStyles,
    linkStyles,
    textFormStyles
} from "@/features/auth/style";
import Button from "@/shared/components/buttons/button";
import icon from "@/assets/icon.svg";
import OtpCodeInput from "@/shared/components/inputs/otp-input";

interface IStepCodeProps {
    email: string;
    onSuccess: (confirmation_code: string) => void;
    onBack: () => void;
}

const StepCode: React.FC<IStepCodeProps> = ({ onSuccess, onBack }) => {
    const { otp, setOtp, handleSubmit } = useStepCodeForm({ onSuccess });

    return (
        <form
            onSubmit={handleSubmit}
            className={cn(
                formAuthStyles,
                "min-h-[710px]"
            )}>
            <div className="text-center">
                <h2 className={headerStyles}>Восстановление</h2>
                <h2>доступа</h2>
            </div>

            <div className={cn(formContainerStyles, "gap-6 mt-4")}>
                <img
                    src={icon}
                    width="100"
                    alt="Иконка облачного хранилища"
                    className="mx-auto"
                />
                <div className={cn(textFormStyles)}>
                    На почт отправлен код подтверждения
                </div>

                <div>
                    <OtpCodeInput value={otp} onChange={setOtp} numInputs={6} />
                </div>

                <div className="text-center">
                    <div className={cn(linkStyles, "mt-4")}>
                        <button type="button">
                            Отправить код повторно
                        </button>
                    </div>
                </div>
            </div>

            <div className={cn(formContainerStyles, "gap-[8px]")}>
                <Button className="w-[309px]" type="submit">
                    Продолжить
                </Button>
                <div className={cn(linkStyles, "mt-4")}>
                    <button
                        type="button"
                        onClick={onBack}
                        className="cursor-pointer">
                        Назад
                    </button>
                </div>
            </div>
        </form>
    );
};

export default StepCode;
