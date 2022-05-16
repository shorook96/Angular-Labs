import { Component, OnInit } from '@angular/core';
import { IPost } from '../IPost';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postsService: PostsService) { }
  errorMessage:any;
  posts: IPost[]=[]
ngOnInit(): void {
  this.postsService.getPosts().subscribe(postsData => {
      this.posts= postsData;
  },error => {this.errorMessage=error})
}


}
