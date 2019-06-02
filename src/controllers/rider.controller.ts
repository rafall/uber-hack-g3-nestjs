import { Controller, Param, Get, Post, Body } from '@nestjs/common';
import { UserService } from '@services/user.service';
import { RegisterDriverDTO, RiderDTO } from 'dto';

@Controller('rider')
export class RiderController {

    constructor(
        private readonly userService: UserService,
    ) {}

    @Get(':id')
    getRider(@Param('id') id: number) {
        return this.userService.findRiderById(+id);
    }

    @Post()
    async registerRider(@Body() body: RiderDTO) {
        return this.userService.createRider(body);
    }
}
