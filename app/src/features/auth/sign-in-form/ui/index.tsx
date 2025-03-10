import {useSignInForm} from "../model";
import {Link} from "react-router-dom";
import ERouterPath from "@/shared/common/enum/router";
import Input from "@/shared/components/inputs/base-input";
import {validationRules} from "@/features/auth/validation-auth-form";
import Button from "@/shared/components/buttons/button";
import icon from '@/assets/icon.svg';

import {cn} from "@/shared/utils/cn";
import {inputsStyles} from "@/shared/components/inputs/style.ts";
import {
    formContainerStyles, formAuthStyles, errorTextStyles, headerStyles, linkStyles
} from "../../style";
import React from "react";

const SignInForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        onSubmit,
        errors,
    } = useSignInForm();
    const sizeInputs = "w-[474px] h-[54px]";
    return (
        <form onSubmit={handleSubmit(onSubmit)}
              className={cn(formAuthStyles, "py-[40px] min-h-[697px]")}>
            <div className={cn(formContainerStyles, "gap-[30px]")}>
                <div className={headerStyles}>
                    <h2>Авторизация</h2>
                </div>
                <div className={cn(formContainerStyles, "gap-[48px]")}>
                    <img src={icon} width="100" alt="Иконка облачного хранилища"/>
                    <div className={formContainerStyles}>
                        <div>
                            <Input
                                {...register("email", validationRules.email)}
                                type="email"
                                placeholder="E-mail*"
                                className={cn(inputsStyles({error: !!errors.email}), sizeInputs)}/>
                            {errors.email && <p className={errorTextStyles()}>{errors.email.message}</p>}
                        </div>
                        <div>
                            <Input
                                {...register("password", validationRules.password)}
                                placeholder="Пароль*"
                                type="password"
                                className={cn(inputsStyles({error: !!errors.password}), sizeInputs)}/>
                            {errors.password && <p className={errorTextStyles()}>{errors.password.message}</p>}
                        </div>
                        <div className={linkStyles}>
                            <p>Забыли пароль?</p>
                            <Link to={ERouterPath.RESET_PAGE}>Восстановить</Link>
                        </div>
                    </div>
                </div>

            </div>
            <div className={formContainerStyles}>
                <Button
                    className="w-[165px]"
                    type="submit">Войти</Button>
                <div className={linkStyles}>
                    <p>Нет аккаунта?</p>
                    <Link to={ERouterPath.SIGN_UP_PAGE}>Зарегистрироваться</Link>
                </div>
            </div>
        </form>
    );
};

export default SignInForm;
