"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usertRouter = exports.UserController = void 0;
const express_1 = require("express");
const user_storage_gateway_1 = require("../adapters/user.storage.gateway");
const get_all_users_interatot_1 = require("../use-cases/get-all-users.interatot");
class UserController {
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const repository = new user_storage_gateway_1.UserStorageGateway();
                const interactor = new get_all_users_interatot_1.GetAllUsersInteractor(repository);
                const data = yield interactor.execute();
                res.status(200).json({ data, error: false });
            }
            catch (error) {
                console.error(error);
                res.status(400).json({ message: 'error' });
            }
        });
    }
}
exports.UserController = UserController;
exports.usertRouter = (0, express_1.Router)();
exports.usertRouter.get('/users', [], UserController.getAll);
//# sourceMappingURL=user.controller.js.map