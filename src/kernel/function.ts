import bcrypts from 'bcryptjs';

export const hash = async ( password : string )  => {
    return await new Promise<String>((resolve, reject) => {
        bcrypts.hash(password, 10, (err, hash) => {
            if (err) reject(err);
            resolve(hash); 
        });
    });
}


export const compare = async ( password : string , hashedPassword : string) : Promise<Boolean> => {
    return await new Promise((resolve, reject) => {
        bcrypts.compare(password, hashedPassword, (err, hash) => {
            if (err) reject(err);
            resolve(hash); 
        });
    });
}

