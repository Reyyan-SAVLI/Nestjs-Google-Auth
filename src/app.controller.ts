import { Controller, Get, Req, UseFilters, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthGuard('google'))
  @Get()
  async googleAuth(@Req() req){}

  @UseGuards(AuthGuard('google'))
  @Get('auth/google/callback')
  googleAuthRedirect(@Req() req){
    return this.appService.googleLogin(req);
  }


}
