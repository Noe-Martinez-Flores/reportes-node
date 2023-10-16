import { Request, Response,Router } from "express";
import { UserStorageGateway } from "../adapters/user.storage.gateway";
import { GetAllUsersInteractor } from "../use-cases/get-all-users.interatot";

export class UserController {
    static async getAll (req : Request, res : Response) {
        try {
            const repository = new UserStorageGateway();
            const interactor = new GetAllUsersInteractor(repository);
            const data = await interactor.execute();
            res.status(200).json({data, error : false});
        } catch (error) {
            console.error(error);
            res.status(400).json({message : 'error'});
        }
    }
}

export const usertRouter = Router();
usertRouter.get('/users' ,[] ,UserController.getAll);