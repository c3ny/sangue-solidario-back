import { Module } from '@nestjs/common';
import { BlogController } from './controller/blog.controller';
import { BlogRepository } from './repository/blog.repository';
import { BlogService } from './service/blog.service';

@Module({
  controllers: [BlogController],
  providers: [BlogRepository, BlogService],
})
export class BlogModule {}
