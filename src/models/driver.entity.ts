import { Entity, JoinColumn, OneToOne } from 'typeorm';
import { UserEntity } from './user.entity';
import { CarEntity } from './car.entity';

@Entity('driver')
export class DriverEntity extends UserEntity {
    @OneToOne(type => CarEntity)
    @JoinColumn()
    car: CarEntity;

}
