import {cva} from "class-variance-authority";

export const flexCol = "flex flex-col";
export const formAuthStyles = cva(
    `${flexCol} px-[76px] py-[40px] gap-[62px] w-[626px] bg-white rounded-[45px]`
);

export const inputContainerStyles = cva(
    `${flexCol} gap-6`
);
export const radioContainerStyles = cva(
    "flex items-center gap-2 cursor-pointer"
);

export const formContainerStyles = cva(
    `${flexCol} gap-6 items-center`
);

export const errorTextStyles = cva(
    `pt-1 text-error-primary`, {
        variants: {
            error: {
                true: "text-error-primary",
                false: "",
            }
        },
    });
export const headerStyles = cva(
    "bg-purple-light rounded-xl px-3 w-fit"
);

export const linkStyles = cva(
    "flex gap-2 text-[20px]"
);

export const radioStyles = cva(
    "outline-none rounded-[5px] border-purple cursor-pointer transition-all border-2",{
        variants: {
            error: {
                true: "border-error-primary bg-error-secondary focus:border-error-primary hover:border-error-primary",
            }
        }
    }

)