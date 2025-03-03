import {cva} from "class-variance-authority";

const switcherButtonStyles = cva(
    "relative inline-flex h-6 w-[44px] p-0.5 items-center rounded-xl border transition cursor-pointer hover:shadow-[0_0_20px_var(--color-custom-shadow)] border-purple bg-white dark:bg-purple-dark dark:border-white",
);

const switcherCircleStyles = cva(
    "inline-block h-[20px] w-[20px] transform rounded-full transition bg-purple translate-x-[19px] dark:translate-x-0  dark:bg-white",
);

export { switcherButtonStyles, switcherCircleStyles };