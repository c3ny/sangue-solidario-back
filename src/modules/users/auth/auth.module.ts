import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './google.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'google' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'default_secret',
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN || '3600s' },
    }),
  ],
  controllers: [AuthController],
  providers: [GoogleStrategy],
  exports: [PassportModule, JwtModule],
})
export class AuthModule {}
