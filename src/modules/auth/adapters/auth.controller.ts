import { AuthSignInInteractor } from "../use-cases/auth-signin.interator";
import { AuthRepository } from "../use-cases/ports/auth.repository";
import { AuthGateway } from "./auth.storage.gateway";

export class AuthController {
    login ( email : string, password : string ){
        try {
            const repository : AuthRepository = new AuthGateway();
            const login : AuthSignInInteractor = new AuthSignInInteractor(repository);

            return login.execute({ email, password });
        } catch (error) {
            return error;
        }
    }

    register ( payload : any ){
        try {
            const repository : AuthRepository = new AuthGateway();
            return repository.register(payload);
        } catch (error) {
            return error;
        }
    }
    
}