import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('rider')
export class RiderEntity extends UserEntity {
    @Column()
    promoCode: string;
}
