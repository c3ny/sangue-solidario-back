import { Injectable } from '@nestjs/common';
import { Post } from '../interface/blog.interface';

@Injectable()
export class BlogRepository {
  private posts: Post[] = [
    {
      title: 'Title Teste',
      description: 'Lorem Ipsum',
      applicant: 'Test User',
      bloodType: 'O+',
      image: 'image',
    },
  ];

  getPostList() {
    return this.posts;
  }
}
