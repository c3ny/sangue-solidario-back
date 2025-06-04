import { Controller, Get, Param } from '@nestjs/common';
import { BlogService } from '../service/blog.service';

@Controller('/blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  getPostList() {
    return this.blogService.getPostsList();
  }

  @Get('/:id')
  getPost(@Param('id') id: string) {
    return this.blogService.getPost(Number(id));
  }
}
