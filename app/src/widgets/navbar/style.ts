import {cva} from "class-variance-authority";


export const navbarContainerStyles =
    "h-screen border-r-3 border-purple rounded-b-[50px] text-black dark:text-white flex flex-col items-center bg-white dark:bg-dark-theme pt-[184px] pb-[56px] justify-between ";

export const iconNavStyles = "dark:text-white w-[33px] h-[33px]";

export const navContainerStyles = "flex flex-col gap-[88px]";

export const navLinkStyles = "flex items-center gap-[5px]";
export const navLinkBlockStyles = "block w-full h-full";

export const navCircleStyle = cva(
    "rounded-full",
    {
        variants: {
            variant: {
                border: "w-[53px] h-[53px] flex items-center justify-center  bg-[linear-gradient(-45deg,#AEA1C9,#FFFFFF,#AEA1C9)] dark:bg-[linear-gradient(-45deg,#AEA1C9,#624699,#AEA1C9)]",

                circle: "w-[51px] h-[51px] bg-gradient-to-b from-[#624699] to-[#624699A3] dark:from-[#AEA1C9] dark:to-[#AEA1C9A3] backdrop-blur-4",
            },
        },
    }
);