import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('listing-item')
export class ListingItemEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  desc: string;

  @Column()
  country: string;

  @Column()
  what: string;

  @Column()
  have: string;

  @Column()
  timestamp: string;

  @Column()
  postcode: string;
}
