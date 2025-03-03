import {FC, InputHTMLAttributes, useState} from "react";
import {Icon} from "@iconify/react";
import {cn} from "@/shared/utils/cn";
import {inputsStyles} from "../style.ts";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
}

const Input: FC<IInputProps> = ({type = "text", className = "", ...props}) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";

    return (
        <div className="relative w-fit">
            <input
                {...props}
                type={isPassword ? (showPassword ? "text" : "password") : type}
                className={cn(inputsStyles({variant: "basic"}), {"pr-[47px]": isPassword}, className)}/>
            {isPassword && (
                <button
                    type="button"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}>
                    <Icon
                        icon={showPassword ? "iconamoon:eye-thin" : "iconamoon:eye-off-thin"}
                        className="text-black dark:text-white w-[20px] h-[20px]"/>
                </button>
            )}
        </div>
    );
};

export default Input;
