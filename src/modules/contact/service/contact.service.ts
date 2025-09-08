import { Injectable } from '@nestjs/common';
import { ContactForm } from '../interfaces/Contact.interfaces';

@Injectable()
export class ContactService {
  async registerContact(data: ContactForm) {}
}
