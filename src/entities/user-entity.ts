import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('user')
export class UserEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;
}
