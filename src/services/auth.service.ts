import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
    ) {}

    async signIn(user): Promise<string> {
        const payload = { phoneNumber: user.phoneNumber };
        return this.jwtService.sign(payload);
    }
}
