import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserCredentialsDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
