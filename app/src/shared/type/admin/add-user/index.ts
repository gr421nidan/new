export enum EGrantID {
    VIEW = 0,
    FULL_ACCESS = 1,
}

export interface IAddUserPort{
    email: string;
    grant_id:EGrantID;
}
export interface IFormAddUserData extends IAddUserPort {}

export interface IAddUserDto{
    email: string;
}