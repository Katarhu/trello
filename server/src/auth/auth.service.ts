import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '@users/users.service';
import { CreateUserDto, UserCredentialsDto } from '@users/dto';
import { JwtService } from '@nestjs/jwt';
import { hashPassword } from '@helpers';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(userDto: UserCredentialsDto) {
    const user = await this.usersService.validate(userDto);

    const token = this.jwtService.sign({
      id: user._id,
      username: user.username,
      email: user.email,
    });

    return {
      token,
      user: {
        id: user.id.toString(),
        username: user.username,
        email: user.email,
      },
    };
  }

  async register({ password, ...credentials }: CreateUserDto) {
    const { existingField, isUserExist } = await this.usersService.findUser(
      credentials,
    );

    if (isUserExist === true) {
      throw new BadRequestException(`${existingField} is already taken`);
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await this.usersService.createUser({
      password: hashedPassword,
      ...credentials,
    });

    const token = this.jwtService.sign({
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
    });

    return {
      token,
      user: {
        id: newUser.id.toString(),
        username: newUser.username,
        email: newUser.email,
      },
    };
  }
}
