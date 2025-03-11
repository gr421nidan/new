import React from "react";
import {iconNavStyles, navbarContainerStyles, navCircleStyle} from "./style";
import ButtonIcon from "@/shared/components/buttons/batton-icon";
import {useLogout} from "@/entities/auth/logout";
import {cn} from "@/shared/utils/cn";
import {Link} from "react-router-dom";
import ERouterPath from "@/shared/common/enum/router";


interface INavbarWidgetProps {
    isOpen: boolean;
    className?: string;
}

const NavbarWidget: React.FC<INavbarWidgetProps> = ({isOpen, className}) => {
    const logout = useLogout();

    return (
        <div className={cn(navbarContainerStyles, className,  isOpen ? "w-[281px]" : "w-[139px]")}>
            <nav className="flex flex-col gap-[88px]">
                <div className="flex items-center gap-[5px] ">
                    <div className={navCircleStyle}><Link to={ERouterPath.USERS} className="block w-full h-full"></Link></div>
                    {isOpen && <Link to={ERouterPath.USERS} >Пользователи</Link>}
                </div>
                <div className="flex items-center gap-[5px]">
                    <div className={navCircleStyle}><Link to={"/"} className="block w-full h-full"></Link></div>
                    {isOpen && <Link to={"/"} className="text-black">Настройки хранилища</Link>}
                </div>
                <div className="flex items-center gap-[5px]">
                    <div className={navCircleStyle}><Link to={"/"} className="block w-full h-full"></Link></div>
                    {isOpen && <Link to={"/"} className="text-black">Общее хранилище</Link>}
                </div>
                <div className="flex items-center gap-[5px]">
                    <div className={navCircleStyle}><Link to={"/"} className="block w-full h-full"></Link></div>
                    {isOpen && <Link to={"/"} >Корзина</Link>}
                </div>

            </nav>
            <div className={`flex items-end gap-2 ${isOpen ? 'ml-30' : ''}`}>
                {isOpen && <span onClick={logout} className="text-2xl">Выход</span>}
                <ButtonIcon onClick={logout} className={iconNavStyles} icon="material-symbols-light:logout"/>
            </div>

        </div>
    );
};

export default NavbarWidget;
