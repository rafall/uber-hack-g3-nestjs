import { Controller, Param, Get, Post } from '@nestjs/common';

@Controller('driver')
export class DriverController {
    @Get(':id')
    getDriver(@Param() id: number) {
        return 1;
    }

    @Post()
    registerDriver() {
        return 1;
    }
}
