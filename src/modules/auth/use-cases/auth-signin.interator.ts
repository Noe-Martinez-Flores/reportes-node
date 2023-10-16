import { UseCase } from "kernel/contract";
import { AuthRepository } from "./ports/auth.repository";

export class AuthSignInInteractor implements UseCase<any, any>{
    constructor ( private readonly authRepository : AuthRepository ){}
    execute(payload: any): Promise<any> {
        return this.authRepository.login(payload.email, payload.password);
    }
}