import { pool } from "config/postgres";
import { TUser } from "../entitites/user";
import { IUserRepository } from "../use-cases/ports/user.repository";

export class UserStorageGateway implements IUserRepository{
    async findAll(): Promise<TUser[]> {
        const query = `SELECT 
        id,
        username,
        created_at as "createdAt",
        last_signin as "lastSingin",
        s.id as "statusId",
        s.description,
        r.id as "roleId",
        r.description as "role",
        p.id as "personId", 
        FROM users ORDER BY id DESC`;
        const { rows : userRows } = await pool.query(query);
        return userRows.map( (user : TUser) => <TUser>user);
    }
    async findById(id: number): Promise<TUser> {
        throw new Error("Method not implemented.");
    }
    async save(user: TUser): Promise<TUser> {
        throw new Error("Method not implemented.");
    }
    async update(user: TUser): Promise<TUser> {
        throw new Error("Method not implemented.");
    }
    async delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}