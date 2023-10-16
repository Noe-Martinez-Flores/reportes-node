import { Entity, TStatus } from "../../../kernel/type";

export type TPerson = Entity<number> & {
    name : string;
    surname : string;
    lastname ? : string;
    birthdate ? : string;
    createdAt ? : string;
    rfc ? : string;
    curp ? : string;
    sex : string;
}