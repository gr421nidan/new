import { FC, useState } from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/shared/utils/cn";
import { selectBoxStyles, selectOptionStyles, optionStyles } from "./style";

interface IOption {
    label: string;
    value: number;
}

interface ISelectProps {
    options: IOption[];
    className?: string;
    defaultLabel?: string;
}

const CustomSelect: FC<ISelectProps> = ({options, className, defaultLabel = "",}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<number>();

    const selectedOption = options.find((opt) => opt.value === selectedValue);
    const displayLabel = selectedOption ? selectedOption.label : defaultLabel;

    return (
        <div className={cn("relative", className)}>
            <div
                className={cn(selectBoxStyles({ isOpen }))}
                onClick={() => setIsOpen(!isOpen)}>
                {displayLabel}
                <Icon
                    icon="ep:arrow-down"
                    className={cn("text-purple transition-transform", isOpen && "rotate-180")}/>
            </div>

            {isOpen && (
                <ul className={cn(selectOptionStyles())}>
                    {options.map((option, index) => (
                        <li
                            key={option.value}
                            className={cn(optionStyles(), index !== 0 && "border-t-2 border-lightPurple")}
                            onClick={() => {
                                setSelectedValue(option.value);
                                setIsOpen(false);
                            }}>
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomSelect;
