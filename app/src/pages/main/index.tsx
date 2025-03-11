import {ReactNode, useState} from 'react';
import ThemeSwitcher from "@/features/theme-switcher";
import OtpCodeInput from "@/shared/components/inputs/otp-input";
import CustomSelect from "@/shared/ui/select";
import CustomDatePicker from "@/shared/ui/date";
import Input from "@/shared/components/inputs/base-input";
import Button from "@/shared/components/buttons/button";
import {useLogout} from "@/entities/auth/logout";
import CheckboxInput from "@/shared/components/inputs/checkbox-input";
import ButtonIcon from "@/shared/components/buttons/batton-icon";


const MainPage = (): ReactNode => {
    const [otp, setOtp] = useState("");
    const options = [
        {label: "Просмотр", value: 1},
        {label: "Полный доступ", value: 0},
        {label: "Alo", value: 3},
        {label: "🤡", value: 4}
    ];
    const logout = useLogout();
    return (

        <div className="">
            <Button onClick={logout} className="w-[200px]">Выход</Button>
            <ThemeSwitcher/>
            <CustomDatePicker className="w-[248px]"/>
            <CustomSelect defaultLabel="Права" className="w-[248px]" options={options}/>
            <p>C иконками</p>
            <ButtonIcon icon="mdi:home" className="h-[52px]">Домой</ButtonIcon>
            <ButtonIcon icon="mdi:settings"/>
            <p>Просто</p>
            <div>
                <Input placeholder="Имя*" className="w-[474px] h-[54px]"/>
            </div>
            <p>Пароль</p>
            <div>
                <Input placeholder="Пароль*" type="password" className="w-[474px]  h-[54px]"/>
            </div>
            <div>
                <p>Отп</p>
                <OtpCodeInput value={otp} onChange={setOtp} numInputs={6}/>
                <p>Чек-Бох</p>
                <CheckboxInput name="me" value="1" type="radio" className="w-[20px] h-[20px]"/>
                <CheckboxInput name="me" value="2" type="radio" className="w-[20px] h-[20px]"/>
                <CheckboxInput name="к" value="32" type="checkbox" className="w-[20px] h-[20px]"/>
            </div>
        </div>
    );
};

export default MainPage;