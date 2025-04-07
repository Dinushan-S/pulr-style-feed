import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html'
})
export class PostFormComponent {
  caption = '';
  itemsText = '';
  isLoading = false;

  constructor(private postService: PostService) {}

  submitPost() {
    this.isLoading = true;

    const newPost: Post = {
      caption: this.caption,
      items: this.itemsText.split(',').map(i => ({ name: i.trim() }))
    };

    this.postService.createPost(newPost.caption, newPost.items.map(item => item.name)).subscribe({
      next: () => {
        this.caption = '';
        this.itemsText = '';
        this.isLoading = false;
        location.reload();
      },
      error: err => {
        console.error('Error creating post:', err);
        this.isLoading = false;
      }
    });
  }
}
