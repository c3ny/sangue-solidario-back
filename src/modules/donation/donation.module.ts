import { Module } from '@nestjs/common';
import { DonationService } from './service/donation.service';
import { DonationController } from './controller/donation.controller';
import { DonationRepository } from './repository/donation.repository';

@Module({
  providers: [DonationService, DonationRepository],
  controllers: [DonationController],
})
export class DonationModule {}
