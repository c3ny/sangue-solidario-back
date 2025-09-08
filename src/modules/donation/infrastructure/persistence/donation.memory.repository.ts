import { Injectable } from '@nestjs/common';
import { DonationRepository } from '../../core/ports/donation.repository';
import { Donation } from '../../core/donation.entity';

@Injectable()
export class DonationMemoryRepository implements DonationRepository {
  private donations = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1745433921735-f5e2450cbec1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
      name: 'Mario Luiz',
      bloodType: 'O+',
      quantity: 5,
      location: {
        lat: -23.45902523345418,
        lng: -47.480199982675394,
      },
      user: {
        type: 'handler',
      },
    },
    {
      id: 2,
      image:
        'https://plus.unsplash.com/premium_photo-1722859288966-b00ef70df64b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHBvcnRyYWl0fGVufDB8fDB8fHww',
      name: 'Claudio Andrade',
      bloodType: 'A+',
      location: { lat: -23.470061709979536, lng: -47.48293325972532 },
      quantity: 3,
      user: {
        type: 'handler',
      },
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHBvcnRyYWl0fGVufDB8fDB8fHww',
      name: 'Lucas Andrade',
      bloodType: 'A+',
      location: { lat: -23.47614516387172, lng: -47.4734203414042 },
      quantity: 7,
      user: {
        type: 'user',
      },
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1528892952291-009c663ce843?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHBvcnRyYWl0fGVufDB8fDB8fHww',
      name: 'Andrade Andrade',
      bloodType: 'A+',
      location: { lat: -23.61961200598746, lng: -47.55845706644422 },
      quantity: 9,
      user: {
        type: 'user',
      },
    },
  ];

  getListOfDonations(): Donation[] {
    return this.donations;
  }

  getDonation(id: number): Donation {
    return this.donations.find((donation) => donation.id === id) as Donation;
  }
}
