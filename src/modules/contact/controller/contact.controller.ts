import { Body, Controller, Post } from '@nestjs/common';
import { ContactForm } from '../interfaces/Contact.interfaces';
import { ContactService } from '../service/contact.service';

@Controller('/contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}
  @Post()
  registerContact(@Body() data: ContactForm) {
    return data;
  }
}
