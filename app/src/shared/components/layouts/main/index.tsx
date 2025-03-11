import React, {useState } from "react";
import NavbarWidget from "@/widgets/navbar";
import HeaderWidget from "@/widgets/header";
import SidebarWidget from "@/widgets/sidebar";
import {Outlet} from "react-router-dom";

const MainLayout: React.FC = () => {
    const [isNavbarOpen, setNavbarOpen] = useState(false);
    const toggleNavbar = () => {
        setNavbarOpen(!isNavbarOpen);
    };

    return (
        <div className="flex flex-col min-h-screen">

            <HeaderWidget toggleNavbar={toggleNavbar} className="fixed top-0 z-10" />

            <div className="flex">
                <NavbarWidget isOpen={isNavbarOpen} className="fixed left-0" />

                <main className="flex-1 mx-auto px-[52px] pt-[56px]">
                   <Outlet/>
                </main>

                <SidebarWidget className="fixed right-0 top-0 h-screen z-20" />
            </div>
        </div>
    );
};

export default MainLayout;
