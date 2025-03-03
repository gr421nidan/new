import { FC, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/shared/utils/cn";
import { buttonStyles } from "../style.ts";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

const Button: FC<ButtonProps> = ({
                                     children,
                                     type = "button",
                                     className = "",
                                     ...props
                                 }) => {
    return (
        <button
            type={type}
            className={cn(buttonStyles({ variant: "base" }), className)}
            {...props}>
            {children}
        </button>
    );
};

export default Button;
