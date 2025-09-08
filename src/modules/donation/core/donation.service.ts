import { Inject, Injectable } from '@nestjs/common';
import { Donation } from './donation.entity';
import { DonationRepository } from './ports/donation.repository';
import { DONATION_REPOSITORY } from '../constants';

@Injectable()
export class DonationService {
  constructor(
    @Inject(DONATION_REPOSITORY)
    private readonly donationRepository: DonationRepository,
  ) {}

  getListOfDonations(): Donation[] {
    return this.donationRepository.getListOfDonations();
  }

  getDonation(id: number): Donation {
    return this.donationRepository.getDonation(id);
  }
}
