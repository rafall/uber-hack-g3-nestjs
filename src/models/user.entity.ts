import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('user')
@Unique(['document'])
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  document: string;

  @Column()
  photoUrl: string;

  @Column()
  phoneNumber: string;

  @Column()
  password: string;

  @Column()
  address: string;

  @Column()
  houseNumber: string;

  @Column()
  referencePoint: string;

}
