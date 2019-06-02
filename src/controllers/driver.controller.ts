import { Controller, Param, Get, Post, Body } from '@nestjs/common';
import { UserService } from '@services/user.service';
import { RegisterDriverDTO } from 'dto';

@Controller('driver')
export class DriverController {

    constructor(
        private readonly userService: UserService,
    ) {}

    @Get(':id')
    getDriver(@Param('id') id: number) {
        return this.userService.findDriverById(+id);
    }

    @Post()
    async registerDriver(@Body() body: RegisterDriverDTO) {
        const car = await this.userService.registerCar(body.car);
        const driverData = body as any;
        driverData.car = car.id;
        const driver = await this.userService.createDriver(body);

        return driver;
    }
}
