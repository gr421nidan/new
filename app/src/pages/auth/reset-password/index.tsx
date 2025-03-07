import {ReactNode} from 'react';
import ResetPasswordForms from "@/features/auth/reset-password";


const ResetPasswordPage = (): ReactNode => {

    return (
        <div className="flex justify-center items-center h-screen">
            <ResetPasswordForms/>
        </div>
    );
};

export default ResetPasswordPage;