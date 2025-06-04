import { Injectable } from '@nestjs/common';
import { BlogRepository } from '../repository/blog.repository';

@Injectable()
export class BlogService {
  constructor(private readonly blogRepository: BlogRepository) {}

  getPostsList() {
    return this.blogRepository.getPostList();
  }

  getPost(id: number) {
    return this.blogRepository.getPost(id);
  }
}
