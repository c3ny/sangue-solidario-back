import { Injectable } from '@nestjs/common';
import { DonationRepository } from '../repository/donation.repository';

@Injectable()
export class DonationService {
  constructor(private readonly donationRepository: DonationRepository) {}

  getListOfDonations() {
    return this.donationRepository.getListOfDonations();
  }
}
