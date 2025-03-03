import { cva } from "class-variance-authority";

export const inputsStyles = cva(
    "border-2 outline-none transition-all hover:shadow-[0_0_20px_var(--color-custom-shadow)] " +
    "text-black dark:text-white border-purple-light dark:placeholder-white-secondary  hover:placeholder-black dark:hover:placeholder-white focus:border-purple hover:border-purple",
    {
        variants: {
            variant: {
                basic: "h-[54px] text-[20px] px-[27px] rounded-[20px] bg-white dark:bg-gray placeholder-dark-gray ",
                otp: "rounded-[10px] w-[60px] h-[60px] focus:border-purple text-center focus:outline-none hover:shadow-[0_0_20px_var(--color-custom-shadow)] dark:text-white text-[32px]",
            },
            error: {
                true: "border-error-primary bg-error-secondary focus:border-error-primary hover:border-error-primary",
                false: "",
            },
        },
    }
);