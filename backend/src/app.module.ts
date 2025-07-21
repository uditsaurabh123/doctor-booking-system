import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SlotsModule } from './slots/slots.module';
import { BookingsModule } from './bookings/bookings.module';

@Module({
  imports: [SlotsModule, BookingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
