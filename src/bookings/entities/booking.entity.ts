import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BookingEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  fromAirport: string;

  @Column()
  toAirport: string;

  @Column()
  mobileNumber: string;

  @Column()
  email: string;

  @Column()
  departureDate: Date;

  @Column()
  returnDate: Date;
}