import { api } from "@/shared/api";
import {IAddUserPort, IAddUserDto} from "@/shared/type/admin/add-user";

const addUser = async (data: IAddUserPort): Promise<IAddUserDto> => {
    try {
        const response = await api.post<IAddUserDto>("/admin/add-user", data);
        return response.data;
    } catch (error: any) {
        throw error;
    }
};
export default addUser;