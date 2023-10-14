import { CreateUserDTO } from "./dto/CreateUserDTO.js";
import {User} from "../../entities/User.js";

export interface UserRepository {
  get(id: string): User;
  create(dto: CreateUserDTO): User;
  update(id: number): User;
  delete(id: number) : string;
}
