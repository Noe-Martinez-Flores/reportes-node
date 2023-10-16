import { AuthRepository } from "../use-cases/ports/auth.repository";
import axios from 'axios';
export class AuthGateway implements AuthRepository {
    async login(email: string, password: string): Promise<string> {
        const resp = await axios.post('http://localhost:3000/api/auth/login', { email, password });
        return resp.data;
    }
    async register(payload: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
    
}