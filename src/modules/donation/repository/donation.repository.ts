import { Injectable } from '@nestjs/common';

@Injectable()
export class DonationRepository {
  private donations = [
    {
      image:
        'https://images.unsplash.com/photo-1745433921735-f5e2450cbec1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
      name: 'Mario Luiz',
      bloodType: 'O+',
      location: {
        lat: -23.45902523345418,
        lng: -47.480199982675394,
      },
    },
    {
      image:
        'https://images.unsplash.com/photo-1745433921735-f5e2450cbec1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
      name: 'Claudio Andrade',
      bloodType: 'A+',
      location: { lat: -23.470061709979536, lng: -47.48293325972532 },
    },
    {
      image:
        'https://images.unsplash.com/photo-1745433921735-f5e2450cbec1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
      name: 'Lucas Andrade',
      bloodType: 'A+',
      location: { lat: -23.47614516387172, lng: -47.4734203414042 },
    },
    {
      image:
        'https://images.unsplash.com/photo-1745433921735-f5e2450cbec1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
      name: 'Andrade Andrade',
      bloodType: 'A+',
      location: { lat: -23.47182795380287, lng: -47.47711189791751 },
    },
  ];

  getListOfDonations() {
    return this.donations;
  }
}
