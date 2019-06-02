import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('car')
export class CarEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  color: string;

  @Column()
  registrationPlate: string;

}
