import React from "react";
import { useStepNewPasswordForm } from "../model";
import { cn } from "@/shared/utils/cn";
import {
    formAuthStyles,
    formContainerStyles,
    errorTextStyles,
    headerStyles,
    linkStyles
} from "@/features/auth/style";
import Input from "@/shared/components/inputs/base-input";
import { inputsStyles } from "@/shared/components/inputs/style";
import Button from "@/shared/components/buttons/button";
import icon from "@/assets/icon.svg";
import { Link } from "react-router-dom";
import ERouterPath from "@/shared/common/enum/router";
import {validationRules} from "@/features/auth/validation-auth-form";

interface IStepNewPasswordProps {
    email: string;
    confirmation_code: string;
    onSuccess: () => void;
}

const StepNewPassword: React.FC<IStepNewPasswordProps> = ({
                                                             email,
                                                             confirmation_code,
                                                             onSuccess,
                                                         }) => {
    const {
        register,
        handleSubmit,
        errors,
        onSubmit,
        getValues,
    } = useStepNewPasswordForm({ email, confirmation_code, onSuccess });

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={cn(
                formAuthStyles,
                "min-h-[593px] flex flex-col items-center justify-center"
            )}>
            <div className="text-center leading-none">
                <h2 className={headerStyles}>Изменение</h2>
                <h2>пароля</h2>
            </div>

            <div className={cn(formContainerStyles, "gap-[24px] mt-4")}>
                <img
                    src={icon}
                    width="100"
                    alt="Иконка облачного хранилища"
                    className="mx-auto"
                />
                <div>
                    <Input
                        {...register("password", validationRules.password)}
                        type="password"
                        placeholder="Новый пароль*"
                        className={cn(
                            inputsStyles({ error: !!errors.password }),
                            "w-[474px] h-[54px]"
                        )}
                    />
                    {errors.password && (
                        <p className={errorTextStyles()}>{errors.password.message}</p>
                    )}
                </div>
                <div>
                    <Input
                        {...register("confirmPassword", validationRules.confirmPassword(getValues))}
                        type="password"
                        placeholder="Повтор пароля*"
                        className={cn(
                            inputsStyles({ error: !!errors.confirmPassword }),
                            "w-[474px] h-[54px]"
                        )}
                    />
                    {errors.confirmPassword && (
                        <p className={errorTextStyles()}>{errors.confirmPassword.message}</p>
                    )}
                </div>
            </div>

            <div className={cn(formContainerStyles, "gap-[8px]")}>
                <Button className="w-[309px]" type="submit">
                    Сохранить
                </Button>
                <div className={cn(linkStyles, "mt-4")}>
                    <Link to={ERouterPath.SIGN_IN_PAGE}>Вернуться назад</Link>
                </div>
            </div>
        </form>
    );
};

export default StepNewPassword;
