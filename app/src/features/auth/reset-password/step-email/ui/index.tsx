import React from "react";
import { useStepEmailForm } from "../model";
import { cn } from "@/shared/utils/cn";
import {
    formAuthStyles,
    formContainerStyles,
    errorTextStyles,
    headerStyles,
    linkStyles,
    textFormStyles
} from "@/features/auth/style";
import { validationRules } from "@/features/auth/validation-auth-form";
import Input from "@/shared/components/inputs/base-input";
import { inputsStyles } from "@/shared/components/inputs/style";
import Button from "@/shared/components/buttons/button";
import icon from "@/assets/icon.svg";
import { Link } from "react-router-dom";
import ERouterPath from "@/shared/common/enum/router";

interface IStepEmailProps {
    onSuccess: (email: string) => void;
}

const StepEmail: React.FC<IStepEmailProps> = ({ onSuccess }) => {
    const {
        register,
        handleSubmit,
        onSubmit,
        errors,
    } = useStepEmailForm({ onSuccess });
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={cn(
                formAuthStyles,
                "min-h-[680px]"
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
                    Введите адрес почты, и мы вышлем вам письмо с инструкциями по сбросу пароля.
                </div>
                <div>
                    <Input
                        {...register("email", validationRules.email)}
                        type="email"
                        placeholder="E-mail*"
                        className={cn(
                            inputsStyles({ error: !!errors.email }),
                            "w-[474px] h-[54px]"
                        )}
                    />
                    {errors.email && (
                        <p className={errorTextStyles()}>{errors.email.message}</p>
                    )}
                </div>
            </div>
            <div className={cn(formContainerStyles, "gap-[8px]")}>
                <Button className="w-[309px]" type="submit">
                    Отправить письмо
                </Button>
                <div className={cn(linkStyles, "mt-4")}>
                    <Link to={ERouterPath.SIGN_IN_PAGE}>Вернуться назад</Link>
                </div>
            </div>
        </form>
    );
};

export default StepEmail;
