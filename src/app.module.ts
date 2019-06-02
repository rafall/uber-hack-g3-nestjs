import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverController, RiderController } from '@controllers';
import { CarEntity, UserEntity, DriverEntity, RiderEntity } from '@models';
import { UserService } from '@services';
import { AuthController } from '@controllers/auth.controller';
import { AuthService } from '@services/auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

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
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: 'secretKey',
      signOptions: {
        expiresIn: 3600,
      },
    }),
  ],
  controllers: [
    AppController,
    AuthController,
    DriverController,
    RiderController,
  ],
  providers: [
    AppService,
    UserService,
    AuthService,
  ],
})
export class AppModule {}
