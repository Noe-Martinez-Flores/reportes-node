import { Errors } from "../../../kernel/type";
import { pool } from "../../../config/postgres";
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
        const client = await pool.connect();
        try{
            const { person } = user;
            await client.query('BEGIN');
            const query = `INSERT INTO people (name, surname, lastname, birthdate, curp, rfc) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
            const { rows : personRows } = await client.query(query, [
                person?.name,
                person?.surname,
                person?.lastname,
                person?.birthdate,
                person?.curp,
                person?.rfc
            ]);
            if (personRows.length === 0) throw new Error(Errors.RECORD_NOT_FOUND);
            const savedPerson = personRows[0];
            const userQuery = `INSERT INTO users (username, password, type, user_details, status_id, person_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
            const { rows : userRows } = await client.query(userQuery, [
                user.username,
                user.password,
                user.type,
                user.userDetails,
                user.status?.id,
                savedPerson.id
            ]);
            if (userRows.length === 0) throw new Error(Errors.RECORD_NOT_FOUND);
            
            await client.query('COMMIT');
            user.id = Number(userRows[0].id);
            user.person!.id = Number(savedPerson.id);
            return user;
        }catch( e ){
            console.error(e);
            await client.query('ROLLBACK');
            throw e;
        }
    }
    async update(user: TUser): Promise<TUser> {
        throw new Error("Method not implemented.");
    }
    async delete(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}