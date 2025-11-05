// auth/jwt.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthService {
  constructor(private jwtService: JwtService) {}

  generateToken(user: any) {
    return this.jwtService.sign({ email: user.email, name: user.firstName });
  }
}
