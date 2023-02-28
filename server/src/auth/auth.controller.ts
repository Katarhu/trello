import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, UserCredentialsDto } from '@users/dto';
import { JwtAuthGuard } from './jwt/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  login(@Body() loginDto: UserCredentialsDto) {
    return this.authService.login(loginDto);
  }

  @Post('/register')
  register(@Body() registerCredentials: CreateUserDto) {
    return this.authService.register(registerCredentials);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  auth(@Request() request) {
    return request.user;
  }
}
