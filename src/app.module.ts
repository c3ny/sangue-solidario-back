import { Module } from '@nestjs/common';
import { DonationModule } from './modules/donation/donation.module';
import { BlogModule } from './modules/blog/blog.module';

@Module({
  imports: [DonationModule, BlogModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
