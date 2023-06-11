import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingsModule } from './bookings/bookings.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingEntity } from './bookings/entities/booking.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'indigo',
      entities: [BookingEntity],
      synchronize: true,
    }),
    BookingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
