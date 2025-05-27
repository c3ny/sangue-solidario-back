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
      image:
        'https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymxvb2QlMjBkb25hdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'Title Teste',
      description: 'Lorem Ipsum',
      applicant: 'Test User',
      bloodType: 'O+',
      image:
        'https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymxvb2QlMjBkb25hdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'Title Teste',
      description: 'Lorem Ipsum',
      applicant: 'Test User',
      bloodType: 'O+',
      image:
        'https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymxvb2QlMjBkb25hdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      title: 'Title Teste',
      description: 'Lorem Ipsum',
      applicant: 'Test User',
      bloodType: 'O+',
      image:
        'https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymxvb2QlMjBkb25hdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    },
  ];

  getPostList() {
    return this.posts;
  }
}
