export class CreateUserDTO {
  constructor(
    readonly email: string,
    readonly password: string,
  ) {}
}
