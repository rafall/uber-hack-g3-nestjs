import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { User } from './user.entity';

@Entity()
@Unique(['document'])
export class Rider extends User {

}
