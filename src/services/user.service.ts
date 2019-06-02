import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity, DriverEntity, RiderEntity, CarEntity } from '@models';
import { DriverDTO, CarDTO } from 'dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(CarEntity)
    private readonly carRepository: Repository<CarEntity>,
    @InjectRepository(DriverEntity)
    private readonly driverRepository: Repository<DriverEntity>,
    @InjectRepository(RiderEntity)
    private readonly riderRepository: Repository<RiderEntity>,
  ) {}

  findDriverById(id: number) {
    return this.driverRepository.find({id});
  }

  findRiderById(id: number) {
    return this.riderRepository.find({id});
  }

  async createDriver(data: DriverDTO) {
    return await this.driverRepository.save(data);
  }

  async registerCar(data: CarDTO) {
    return await this.carRepository.save(data);
  }
}
