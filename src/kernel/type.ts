export type Entity<ID extends number | string> = {
    id : ID;
}

export type TPagination = {
    orderBy : string;
    page ? : number;
    offset ? : number;
    limit ? : number;
    order ? : string;
    filter : string;
}

export type JSON = {
    [key : string] : any;
}

export type JSONArray = JSON[];

export type TStatus = Entity<number> & {
    description ? : string;
}

export enum Errors {
    MISSING_FIELDS = 'MissingFields',
    INVALID_FIELDS = 'InvalidFields',
    NOT_FOUND = 'NotFound',
    UNAUTHORIZED = 'Unauthorized',
    FORBIDDEN = 'Forbidden',
    INTERNAL_ERROR = 'InternalError',
    BAD_REQUEST = 'BadRequest',
    CONFLICT = 'Conflict',
    UNPROCESSABLE_ENTITY = 'UnprocessableEntity',
    UNAVAILABLE = 'Unavailable',
    TIMEOUT = 'Timeout',
    UNKNOWN = 'Unknown',
    NOT_IMPLEMENTED = 'NotImplemented',
    NOT_ACCEPTABLE = 'NotAcceptable',
    TOO_MANY_REQUESTS = 'TooManyRequests',
    RECORD_NOT_FOUND = 'RecordNotFound',
    RECORD_ALREADY_EXISTS = 'RecordAlreadyExists',
    RECORD_NOT_UPDATED = 'RecordNotUpdated',
    NO_DATA_FOUND = 'NoDataFound',
    CREDENTIALS_MISMATCH = 'CredentialsMismatch',
}