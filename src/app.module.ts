import { Module } from '@nestjs/common';
import { DonationModule } from './modules/donation/donation.module';
import { BlogModule } from './modules/blog/blog.module';
import { ContactModule } from './modules/contact/contact.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [DonationModule, BlogModule, ContactModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
