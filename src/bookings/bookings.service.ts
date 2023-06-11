import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookingEntity } from './entities/booking.entity';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(BookingEntity)
    private bookingRepository: Repository<BookingEntity>,
  ) {}
  create(createBookingDto: CreateBookingDto) {
    return 'This action adds a new booking';
  }

  findAll() {
    return this.bookingRepository.find() ;
  }

  findOne(id: string) {
    return this.bookingRepository.findOneBy({ id })
  }

  remove(id: string) {
    return this.bookingRepository.delete({ id });
  }
}
