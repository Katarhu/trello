import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './users.model';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(userDto: CreateUserDto) {}

  async findUser() {}
}
