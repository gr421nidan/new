import React from "react";
import {
    iconNavStyles,
    navbarContainerStyles,
    navCircleStyle,
    navContainerStyles,
    navLinkBlockStyles,
    navLinkStyles
} from "./style";
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
        <div className={cn(navbarContainerStyles, className, isOpen ? "w-[281px] shadow-[0_0_250px_#0B0121]" : "w-[139px]")}>
            <nav className={navContainerStyles}>
                <div className={navLinkStyles}>
                    <div className={navCircleStyle({variant: "border"})}>
                        <div className={navCircleStyle({variant: "circle"})}><Link to={ERouterPath.USERS}
                                                                                   className={navLinkBlockStyles}></Link>
                        </div>
                    </div>
                    {isOpen && <Link to={ERouterPath.USERS}>Пользователи</Link>}
                </div>
                <div className={navLinkStyles}>
                    <div className={navCircleStyle({variant: "border"})}>
                        <div className={navCircleStyle({variant: "circle"})}><Link to={"/"}
                                                                                   className={navLinkBlockStyles}></Link>
                        </div>
                    </div>
                    {isOpen && <Link to={"/"}>Настройки хранилища</Link>}
                </div>
                <div className={navLinkStyles}>
                    <div className={navCircleStyle({variant: "border"})}>
                        <div className={navCircleStyle({variant: "circle"})}><Link to={"/"}
                                                                                   className={navLinkBlockStyles}></Link>
                        </div>
                    </div>
                    {isOpen && <Link to={"/"}>Общее хранилище</Link>}
                </div>
                <div className={navLinkStyles}>
                    <div className={navCircleStyle({variant: "border"})}>
                        <div className={navCircleStyle({variant: "circle"})}><Link to={"/"}
                                                                                   className={navLinkBlockStyles}></Link>
                        </div>
                    </div>
                    {isOpen && <Link to={"/"}>Корзина</Link>}
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
