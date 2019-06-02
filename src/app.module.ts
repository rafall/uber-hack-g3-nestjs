import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverController } from '@controllers';
import { CarEntity, UserEntity, DriverEntity, RiderEntity } from '@models';
import { UserService } from '@services';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'uberhack',
      password: 'uberhack',
      database: 'uberhack',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([UserEntity, DriverEntity, RiderEntity, CarEntity]),
  ],
  controllers: [
    AppController,
    DriverController,
  ],
  providers: [
    AppService,
    UserService,
  ],
})
export class AppModule {}
