import {ReactNode} from 'react';
import SignInForm from "@/features/auth/sign-in-form/ui";


const SignInPage = (): ReactNode => {

    return (
        <div className="flex justify-center items-center h-screen">
            <SignInForm/>
        </div>
    );
};

export default SignInPage;