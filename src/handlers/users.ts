import { Request, Response } from "express-serve-static-core";
import { createUserData } from "../middlewares/createUser";
import { createUserQueryParams } from "../types/query-params";
import { user } from "../types/response";

export function getUsers(request: Request, response: Response){
    response.send([]);
};

export function getUserId(request: Request, response: Response){
    response.send({});
};

// dentro da implementação da interface do Request, o terceiro parametro é ReqBody, então
// setamos ele para createUserData.
// Agora o intelliSense consegue acessar os campos definidos em body na interface que exportamos.
// generics. type annotation.
export function createUser(request: Request<{}, {}, createUserData, createUserQueryParams>, response: Response<user>){
    response.status(201).send({
        id: 1,
        username: "Presley",
        email: "presley@dev.com",
    });
};