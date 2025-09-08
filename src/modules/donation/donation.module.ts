import { Module } from '@nestjs/common';
import { DonationService } from './core/donation.service';
import { DonationController } from './application/donation.controller';
import { DONATION_REPOSITORY } from './constants';
import { DonationMemoryRepository } from './infrastructure/persistence/donation.memory.repository';

@Module({
  providers: [
    DonationService,
    {
      provide: DONATION_REPOSITORY,
      useClass: DonationMemoryRepository,
    },
  ],
  controllers: [DonationController],
})
export class DonationModule {}
