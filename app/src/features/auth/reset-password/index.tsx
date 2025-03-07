import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StepEmail from "./step-email/ui";
import StepCode from "./step-code/ui";
import StepNewPassword from "./step-new-password/ui";
import ERouterPath from "@/shared/common/enum/router";

const ResetPasswordForms = () => {
    const [step, setStep] = useState<1 | 2 | 3>(1);
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const navigate = useNavigate();

    const handleEmailSuccess = (userEmail: string) => {
        setEmail(userEmail);
        setStep(2);
    };
    const handleCodeSuccess = (enteredCode: string) => {
        setCode(enteredCode);
        setStep(3);
    };
    const handlePasswordSuccess = () => {
        navigate(ERouterPath.SIGN_IN_PAGE);
    };
    return (
        <>
            {step === 1 && (
                <StepEmail onSuccess={handleEmailSuccess} />
            )}
            {step === 2 && (
                <StepCode email={email} onSuccess={handleCodeSuccess} />
            )}
            {step === 3 && (
                <StepNewPassword
                    email={email}
                    confirmation_code={code}
                    onSuccess={handlePasswordSuccess}/>)}
        </>
    );
};

export default ResetPasswordForms;
