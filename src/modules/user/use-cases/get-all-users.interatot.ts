import { UseCase } from "../../../kernel/contract";
import { TUser } from "../entitites/user";
import { IUserRepository } from "./ports/user.repository";

export class GetAllUsersInteractor implements UseCase<void,TUser[]>{
    constructor( private readonly repository : IUserRepository ){}
    async execute(payload: void): Promise<TUser[]> {
        return await this.repository.findAll();
    }
}