import { FC, ButtonHTMLAttributes, ReactNode } from "react";
import { Icon, IconifyIcon } from "@iconify/react";
import { cn } from "@/shared/utils/cn";
import { buttonStyles } from "../style.ts";


interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: string | IconifyIcon;
    children?: ReactNode;
}

const ButtonIcon: FC<ButtonIconProps> = ({
                                             icon,
                                             children,
                                             type = "button",
                                             className = "",
                                             ...props
                                         }) => {

    const variant = children ? "withIcon" : "icon";

    return (
        <button
            type={type}
            className={cn(buttonStyles({ variant }), className)}
            {...props}>
            {children && <span>{children}</span>}
            {icon &&
                (children ? (
                    <Icon icon={icon} className="w-fit h-fit" />
                ) : (
                    <Icon icon={icon} className={className} />
                ))}
        </button>
    );
};

export default ButtonIcon;
