import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from 'src/auth/auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConfig } from '@config/jwt.config';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '@auth/jwt/jwt.strategy';

@Module({
  imports: [UsersModule, JwtModule.registerAsync(jwtConfig), PassportModule],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
