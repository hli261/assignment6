import { Component, OnInit } from '@angular/core';

//import blogData from '../blogData.json';
//import { BlogPost } from '../BlogPost';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  //ensure that our data is loaded as "blogPosts", in the future, this would
  //come from a service which accesses a WEB API endpoint for data
  //blogPosts: Array<BlogPost> = blogData;
  //blogPosts: Array<BlogPost>;
  constructor() {}

  ngOnInit(): void {}
}
