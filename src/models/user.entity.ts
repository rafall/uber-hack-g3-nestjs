import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('user')
@Unique(['document'])
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  document: string;

  @Column()
  photoUrl: string;

}
