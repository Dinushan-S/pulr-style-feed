import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html'
})
export class PostFormComponent {
  caption = '';
  itemsText = '';

  constructor(private postService: PostService) {}

  submitForm() {
    const items = this.itemsText.split(',').map(i => i.trim());
    this.postService.createPost(this.caption, items).subscribe(() => {
      this.caption = '';
      this.itemsText = '';
    });
  }
}
