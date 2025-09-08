export class Donation {
  id: number;
  image: string;
  name: string;
  bloodType: string;
  quantity: number;
  location: { lat: number; lng: number };
  user: { type: string };
}
