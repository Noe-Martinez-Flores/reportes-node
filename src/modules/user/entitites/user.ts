import { Entity, JSON, TStatus } from "../../../kernel/type";
import { TPerson } from "./person";

export type TUser = Entity<number> & {
    username : string;
    password ? : string;
    status ? : TStatus;
    userDetails ? : JSON;
    type : number;
    person ? : TPerson;
}

export type UserAreas = Entity<number> & {
    user : TUser;
    area : Area;
    createAt ? : string;
    status ? : TStatus;
}

export type Area = Entity<number> & {
    name : string;
    academicDision?: AcademicDision;
    createAt ? : string;
    status ? : TStatus;
}

export type AcademicDision = Entity<number> & {
    name : string;
    abbreviation?: string;
    createAt ? : string;
    status ? : TStatus;
}