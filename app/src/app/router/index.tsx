import {createBrowserRouter} from "react-router-dom";
import {LazyMainPage, LazyResetPasswordPage, LazySignInPage, LazySignUpPage, LazyUsersPage} from "@/pages";
import ERouterPath from "@/shared/common/enum/router";
import MainLayout from "@/shared/components/layouts/main";

const router = createBrowserRouter([
    {
        element: <LazyMainPage/>,
        path: ERouterPath.MAIN_PAGE
    },
    {   element: <LazySignInPage/>,
        path: ERouterPath.SIGN_IN_PAGE
    },
    {   element: <LazySignUpPage/>,
        path: ERouterPath.SIGN_UP_PAGE
    },
    {   element: <LazyResetPasswordPage/>,
        path: ERouterPath.RESET_PAGE
    },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: ERouterPath.USERS,
                element: <LazyUsersPage/>,
            },
            {
                path: ERouterPath.SIGN_UP_PAGE,
                element: <LazySignUpPage />,
            },
        ],
    },
])
export default router
