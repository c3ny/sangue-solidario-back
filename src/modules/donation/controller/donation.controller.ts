import { Controller, Get } from '@nestjs/common';
import { DonationService } from '../service/donation.service';

@Controller('/donations')
export class DonationController {
  constructor(private readonly donationService: DonationService) {}

  @Get()
  getList() {
    return this.donationService.getListOfDonations();
  }
}
