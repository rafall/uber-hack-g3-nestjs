import { Controller, Param, Get, Post, Body, HttpException, HttpCode } from '@nestjs/common';
import { UserService } from '@services/user.service';
import { DriverDTO } from 'dto';
import { AuthService } from '@services/auth.service';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService,
    ) {}

    @Post()
    async login(@Body() body) {
        const result = await this.userService.checkDriverCredentials(body);
        if (result) {
            return {
                token: await this.authService.signIn(body),
            };
        } else {
            throw new HttpException('Credenciais erradas', 401);
        }
    }
}
