import {Icon} from "@iconify/react";
import {cn} from "@/shared/utils/cn";
import {inputsStyles, iconStyles} from "../style";

interface ICheckboxInputProps {
    name: string;
    value: string | number;
    type: string;
    className?: string;
}

const CheckboxInput: React.FC<ICheckboxInputProps> = ({name, value, type, className, ...props}) => {
    return (
        <label className="flex items-center">
            <input
                {...props}
                type={type}
                value={String(value)}
                name={name}
                className={cn(
                    inputsStyles({variant: "check"}), className
                )}
            />
            <Icon icon="uil:check" className={cn(iconStyles, className)}/>
        </label>
    );
};

export default CheckboxInput;
