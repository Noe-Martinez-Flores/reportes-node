import { TUser } from ".../.../../../modules/user/entitites/user";

export interface IUserRepository {
    findAll(): Promise<TUser[]>;
    findById(id: number): Promise<TUser>;
    save(user : TUser) : Promise<TUser>;
    update(user : TUser) : Promise<TUser>;
    delete(id: number) : Promise<boolean>;
}