import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './users.model';
import { Model } from 'mongoose';
import {
  CreateUserDto,
  IFindUserFailure,
  IFindUserSuccess,
  UserCredentialsDto,
} from './dto';
import { IFindUserFields, TFindUserReturn } from './dto';
import { comparePasswords } from '@helpers';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async validate({ email, password }: UserCredentialsDto) {
    const { user, isUserExist } = await this.findUser({ email });

    if (isUserExist == false) {
      throw new UnauthorizedException('Incorrect password or email');
    }

    const isPasswordCorrect = await comparePasswords(password, user.password);

    if (!isPasswordCorrect) {
      throw new BadRequestException(`Incorrect password or email`);
    }

    return user;
  }

  async createUser(userDto: CreateUserDto) {
    const newUser = new this.userModel(userDto);

    await newUser.save();

    return newUser;
  }

  async findUser({
    id,
    username,
    email,
  }: IFindUserFields): Promise<TFindUserReturn> {
    const user = await this.userModel.findOne({
      $or: [{ id }, { username }, { email }],
    });

    if (!user) {
      return { isUserExist: false } as IFindUserSuccess;
    }

    if (user.email === email)
      return {
        user,
        existingField: 'email',
        isUserExist: true,
      } as IFindUserFailure;

    if (user.username === username)
      return {
        user,
        existingField: 'username',
        isUserExist: true,
      } as IFindUserFailure;

    if (user._id.toString() === id)
      return {
        user,
        existingField: 'id',
        isUserExist: true,
      } as IFindUserFailure;
  }
}
