import { Controller, Get, Param } from '@nestjs/common';
import { DonationService } from '../service/donation.service';

@Controller('/donations')
export class DonationController {
  constructor(private readonly donationService: DonationService) {}

  @Get()
  getList() {
    return this.donationService.getListOfDonations();
  }

  @Get('/:id')
  getDonation(@Param('id') id: string) {
    return this.donationService.getDonation(Number(id));
  }
}
