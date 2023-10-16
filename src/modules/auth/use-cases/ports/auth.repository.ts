export interface AuthRepository {
    login(email: string, password: string): Promise<string>;
    register( payload : any ) : Promise<any>;
}