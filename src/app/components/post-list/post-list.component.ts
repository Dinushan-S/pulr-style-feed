import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post.model';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html'
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  isLoading = true;


  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.postService.getPosts().subscribe({
      next: (data: Post[]) => {
        this.posts = data;
        this.isLoading = false; 
      },
      error: (err) => {
        console.error('Error loading posts:', err);
        this.isLoading = false; 
      }
    });
  }

  getItemNames(post: Post): string {
    return post.items
      ?.map(item => item.name.split('\n').join(', '))
      .join(', ') || 'None';
  }

}
