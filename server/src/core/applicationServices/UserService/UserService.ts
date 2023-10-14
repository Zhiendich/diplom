import {UserRepository} from "../../repository/UserRepository/UserRepository.js";
import {User} from "../../entities/User.js";
import {CreateUserDTO} from "../../repository/UserRepository/dto/CreateUserDTO.js";

export class UserService {
    constructor(readonly UserRepository: UserRepository) {}
    async get(id: string) {
        return this.UserRepository.get(id)
    };
   async create(dto: CreateUserDTO) {
       return this.UserRepository.create(dto)
   };
   async update(id: number) {
       return this.UserRepository.update(id)
   };
   async delete(id: number){
       return this.UserRepository.delete(id)
   };
}