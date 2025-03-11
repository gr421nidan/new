import {ReactNode} from 'react';
import SignUpForm from "@/features/auth/sign-up-form/ui";


const SignUpPage = (): ReactNode => {

    return (
        <div className="flex justify-center items-center h-screen  w-screen">
            <SignUpForm/>
        </div>
    );
};

export default SignUpPage;