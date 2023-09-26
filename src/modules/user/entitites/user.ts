import { Entity, TStatus } from "../../../kernel/type";

export type TUser = Entity<number> & {
    username : string;
    password ? : string;
    token ? : string;
    lastSignIn ? : String;
    createdAt ? : String;
    status ? : TStatus;
    person ? : any;
}