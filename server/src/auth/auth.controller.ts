import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '@users/dto';
import { JwtAuthGuard } from './jwt/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  login(@Body() loginDto: CreateUserDto) {
    return this.authService.login(loginDto);
  }

  @Post('/register')
  register() {}

  @UseGuards(JwtAuthGuard)
  @Post()
  auth(@Request() request) {
    return request.user;
  }
}
