// auth/auth.controller.ts
import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {
    // inicia o fluxo OAuth
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    // retorna o usuário autenticado ou token JWT
    return req.user;
  }
}
