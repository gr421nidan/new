import {useSignUpForm} from "../model";
import Input from "@/shared/components/inputs/base-input";
import Button from "@/shared/components/buttons/button";
import {ERoleID} from "@/entities/auth/sign-up/type";
import icon from '@/assets/icon.svg';
import {inputsStyles} from "@/shared/components/inputs/style.ts";
import {cn} from "@/shared/utils/cn";

import {
    formContainerStyles,
    formAuthStyles,
    inputContainerStyles,
    errorTextStyles,
    headerStyles,
    flexCol,
    linkStyles, radioContainerStyles
} from "../../style";
import {validationRules} from "@/features/auth/validation-auth-form";
import {Link} from "react-router-dom";
import ERouterPath from "@/shared/common/enum/router";
import CheckboxInput from "@/shared/components/inputs/checkbox-input";
import React from "react";

const sizeInputs = "w-[474px] h-[54px]";
const SignUpForm: React.FC = () => {
    const {register, handleSubmit, onSubmit, errors} = useSignUpForm();
    return (
        <form onSubmit={handleSubmit(onSubmit)}
              className={cn(formAuthStyles, "min-h-[842px]")}>
            <div className={formContainerStyles}>
                <div className={headerStyles}>
                    <h2>Регистрация</h2>
                </div>
                <img src={icon} width="100" alt="Иконка облачного хранилища"/>
                <div className={inputContainerStyles}>
                    <div>
                        <Input
                            {...register("firstname", validationRules.firstname)}
                            placeholder="Имя*"
                            className={cn(inputsStyles({error: !!errors.firstname}), sizeInputs)}/>
                        {errors.firstname && <p className={errorTextStyles()}>{errors.firstname.message}</p>}
                    </div>
                    <div>
                        <Input
                            {...register("surname", validationRules.surname)}
                            placeholder="Фамилия*"
                            className={cn(inputsStyles({error: !!errors.surname}), sizeInputs)}/>
                        {errors.surname && <p className={errorTextStyles()}>{errors.surname.message}</p>}
                    </div>
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

                    <div className={`${flexCol} gap-[23px] justify-start`}>
                        {([ERoleID.USER, ERoleID.ADMIN] as number[]).map((role) => (
                            <label key={role} className={radioContainerStyles}>
                                <CheckboxInput
                                    {...register("role_id", validationRules.role_id)}
                                    name="role_id"
                                    value={role}
                                    type="radio"
                                    className={cn(
                                        inputsStyles({variant: "check", error: !!errors.role_id}),
                                        "w-[20px] h-[20px]" )}
                                />
                                <span className={errors.role_id ? errorTextStyles({error: true}) : ""}>
                                    {role === ERoleID.USER ? "Для личного использования" : "Для совместного использования"}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
            <div className={formContainerStyles}>
                <Button
                    className="w-[328px]"
                    type="submit"
                >Зарегистрироваться</Button>
                <div className={linkStyles}>
                    <p>Уже есть аккаунт?</p>
                    <Link to={ERouterPath.SIGN_IN_PAGE}>Войти</Link>
                </div>
            </div>
        </form>
    );
};

export default SignUpForm;
