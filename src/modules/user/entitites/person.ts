import { Entity, TStatus } from "../../../kernel/type";

export type TPerson = Entity<number> & {
    name : string;
    surname : string;
    lastname ? : string;
    birthday ? : string;
    createdAt ? : string;
    rfc ? : string;
    curp ? : string;
    status ? : TStatus;
    sex : string;
}