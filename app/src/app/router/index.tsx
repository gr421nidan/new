import {createBrowserRouter} from "react-router-dom";
import {LazyMainPage, LazyResetPasswordPage, LazySignInPage, LazySignUpPage} from "@/pages";
import ERouterPath from "@/shared/common/enum/router";

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
])
export default router
