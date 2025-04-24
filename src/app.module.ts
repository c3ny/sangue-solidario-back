import { Module } from '@nestjs/common';
import { DonationModule } from './modules/donation/donation.module';

@Module({
  imports: [DonationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
