import { IsCPF } from 'brazilian-class-validator';

import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsEmail,
  IsMobilePhone,
  IsString,
  Length,
  validateOrReject
} from 'class-validator';

export interface Params {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  knowledges: string;
}

class UserDTO {
  @IsString()
  @Length(3, 100)
  name: string;

  @IsEmail()
  email: string;

  @IsCPF()
  cpf: string;

  @IsMobilePhone('pt-BR')
  phone: string;

  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(3)
  knowledges: string;

  constructor ({
    name,
    email, 
    cpf, 
    phone, 
    knowledges 
  }: Params) {
    this.name = name,
    this.email = email,
    this.cpf = cpf,
    this.phone = phone,
    this.knowledges = knowledges
  }

  public async validate() {
    await validateOrReject(this, {validationError: { target: false }});
  }
}

export { UserDTO };