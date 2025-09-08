import { Donation } from '../donation.entity';

export interface DonationRepository {
  getListOfDonations(): Donation[];
  getDonation(id: number): Donation;
}
