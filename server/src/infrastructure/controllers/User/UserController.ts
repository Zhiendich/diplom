import {UserService} from "../../../core/applicationServices/UserService/UserService.js";
import {NextFunction, Request, Response} from "express";

export class UserController {
    constructor(readonly UserService: UserService) {
    }
    async get(req: Request, res: Response, next: NextFunction) {
        try {
            const {id} = req.body
            const user = await this.UserService.get(id)
            res.status(200).json(user);
        } catch (error) {
            res.status(404).json('Something went wrong');
        }

    }
}