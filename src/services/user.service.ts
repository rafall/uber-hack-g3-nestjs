import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriverEntity, RiderEntity, CarEntity } from '@models';
import { DriverDTO, CarDTO, RiderDTO } from 'dto';

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

  async registerCar(data: CarDTO) {
    return await this.carRepository.save(data);
  }

  // DRIVER
  findDriverById(id: number) {
    return this.driverRepository.find({id});
  }

  async checkDriverCredentials(data) {
    const driver = await this.driverRepository.findOne({phoneNumber: data.phoneNumber});
    return driver.password === data.password;
  }

  // TODO: encriptar senha
  async createDriver(data: DriverDTO) {
    return await this.driverRepository.save(data);
  }

  // RIDER
  findRiderById(id: number) {
    return this.riderRepository.find({id});
  }

  // TODO: encriptar senha
  async createRider(data: RiderDTO) {
    return await this.riderRepository.save(data);
  }
}
