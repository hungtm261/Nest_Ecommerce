import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  getPosts() {
    return [
      {
        id: 1,
        title: 'First Post',
        content: 'This is the content of the first post',
      },
      {
        id: 2,
        title: 'Second Post',
        content: 'This is the content of the second post',
      },
    ];
  }

  createPost(body: any) {
    return body;
  }

  getPostById(id: string) {
    return 'Post with id ' + id;
  }

  updatePost(id: string, body: any) {
    return `Post with id ${id} updated with data: ${JSON.stringify(body)}`;
  }

  deletePost(id: string) {
    return `Post with id ${id} deleted`;
  }
}
