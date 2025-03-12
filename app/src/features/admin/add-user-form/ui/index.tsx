import React from "react";
import useAddUserPresenter from "@/features/admin/add-user-form/presenter";
import Input from "@/shared/components/inputs/base-input";
import {EGrantID, IFormAddUserData} from "@/shared/type/admin/add-user";
import {cn} from "@/shared/utils/cn";
import CustomSelect from "@/shared/ui/select";
import Button from "@/shared/components/buttons/button";

const AddUserForm: React.FC = () => {
    const {
        register,
        onSubmit,
        errors,
    } = useAddUserPresenter();
    const isError = (field: keyof IFormAddUserData): boolean => !!errors[field];
    const grantOptions = [
        { value: EGrantID.VIEW, label: "Просмотр" },
        { value: EGrantID.FULL_ACCESS, label: "Полный доступ" },
    ];
    return (
        <form onSubmit={onSubmit} className="h-[189px] rounded-[15px] border-2 border-purple-light p-[27px] flex flex-col gap-[25px]">
            <h3>Добавление учетной записи</h3>
            <div className="flex justify-between">
                <div>
                    <Input
                        type="email"
                        placeholder="Почта"
                        className={cn(({error: isError("email")}), "h-[52px] w-[696px]")}
                        {...register("email")}/>
                </div>
                <div>
                    <CustomSelect options={grantOptions}  className="h-[52px] w-[248px]" defaultLabel="Права" {...register("grant_id")}/>
                </div>
                <Button type="submit" className="h-[52px] w-[273px] ">Сохранить</Button>
            </div>
        </form>
    );
};

export default AddUserForm;
