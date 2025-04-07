import { Component } from '@angular/core';

@Component({
  selector: 'app-style-post',
  templateUrl: './style-post.component.html',
  styleUrls: ['./style-post.component.css']
})
export class StylePostComponent {
  caption: string = '';
  itemsText: string = '';
  posts: any[] = [];

  submitPost() {
    const itemsArray = this.itemsText
      .split('\n')
      .map(item => item.trim())
      .filter(item => item !== '');

    const newPost = {
      caption: this.caption,
      items: itemsArray,
      postedOn: new Date()
    };

    this.posts.unshift(newPost);
    this.caption = '';
    this.itemsText = '';
  }
}
