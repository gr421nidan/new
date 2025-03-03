import {useSignUpForm} from "../model";
import Input from "@/shared/components/inputs/base-input";
import Button from "@/shared/components/buttons/button";
import {ERoleID} from "@/entities/auth/sign-up/type";
import icon from '@/assets/icon.svg';
import {inputsStyles} from "@/shared/components/inputs/style.ts";
import {cn} from "@/shared/utils/cn";
import {Icon} from "@iconify/react";
import {
    formContainerStyles,
    formAuthStyles,
    inputContainerStyles,
    errorTextStyles,
    headerStyles,
    iconStyles,
    radioContainerStyles,
    flexCol,
    linkStyles, radioStyles
} from "../../style";
import {validationRules} from "@/features/auth/validation-auth-form";
import {Link} from "react-router-dom";
import ERouterPath from "@/shared/common/enum/router";

const sizeInputs = "w-[474px]";
const SignUpForm = () => {
    const {register, handleSubmit, onSubmit, errors} = useSignUpForm();
    return (
        <form onSubmit={handleSubmit(onSubmit)}
              className={formAuthStyles()}>
            <div className={formContainerStyles()}>
                <div className={headerStyles()}>
                    <h2>Регистрация</h2>
                </div>
                <img src={icon} width="100" alt="Иконка облачного хранилища"/>
                <div className={inputContainerStyles()}>
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
                            <label key={role} className={radioContainerStyles()}>
                                <input
                                    {...register("role_id", validationRules.role_id)}
                                    type="radio"
                                    value={String(role)}
                                    name="role_id"
                                    className={cn(
                                        radioStyles({ error: !!errors.role_id}),
                                        "appearance-none peer checked:bg-purple w-[20px] h-[20px]" )}/>
                                <Icon icon="uil:check" className={cn(iconStyles(), "w-[20px]")}/>
                                <span className={errors.role_id ? errorTextStyles({error: true}) : ""}>
                                    {role === ERoleID.USER ? "Для личного использования" : "Для совместного использования"}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
            <div className={formContainerStyles()}>
                <Button
                    className="w-[342px]"
                    type="submit"
                >Зарегистрироваться</Button>
                <div className={linkStyles()}>
                    <p>Уже есть аккаунт?</p>
                    <Link to={ERouterPath.SIGN_IN_PAGE}>Войти</Link>
                </div>
            </div>
        </form>
    );
};

export default SignUpForm;
