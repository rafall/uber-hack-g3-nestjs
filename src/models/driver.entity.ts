import { Entity, Column, PrimaryGeneratedColumn, Unique, JoinColumn, OneToOne } from 'typeorm';
import { User } from './user.entity';
import { Car } from './car.entity';

@Entity()
export class Driver extends User {
    @OneToOne(type => Car)
    @JoinColumn()
    profile: Car;

}
