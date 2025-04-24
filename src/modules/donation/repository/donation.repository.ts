import { Injectable } from '@nestjs/common';

@Injectable()
export class DonationRepository {
  private donations = [
    {
      image:
        'https://images.unsplash.com/photo-1745433921735-f5e2450cbec1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
      name: 'Mario Luiz',
      bloodType: 'O+',
    },
    {
      image:
        'https://images.unsplash.com/photo-1745433921735-f5e2450cbec1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
      name: 'Claudio Andrade',
      bloodType: 'A+',
    },
  ];

  getListOfDonations() {
    return this.donations;
  }
}
