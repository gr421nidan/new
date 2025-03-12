import {cva} from "class-variance-authority";

export const sidebarContainerStyles = "bg-white dark:bg-dark-theme w-[376px] h-screen border-l-3 border-purple rounded-l-[50px] flex flex-col justify-between items-center py-[27px]";

export const circleProfileStyle = "w-[60px] h-[60px] border-2 rounded-full border-purple dark:border-purple-light flex items-center justify-center dark:text-white";

export const profileButtonStyle = cva(
    "rounded-[50px] flex items-center justify-between",
    {
        variants: {
            variant: {
                border: "w-[277px] h-[60px]  bg-[linear-gradient(to_bottom_right,rgba(98,70,153,0.8),rgba(98,70,153,0.1))] dark:bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.8),rgba(211,211,211,0.1))]",
                button: "w-[275px] h-[56px] bg-[linear-gradient(to_bottom_right,rgba(174,161,201,0.8),rgba(174,161,201,0.1))] dark:bg-[linear-gradient(to_bottom_right,rgba(98,70,153,0.8),rgba(98,70,153,0.1))] pr-[29px]",
                buttonWhite:"w-[275px] h-[56px] bg-white dark:bg-dark-theme",
            },
        },
    }
);
