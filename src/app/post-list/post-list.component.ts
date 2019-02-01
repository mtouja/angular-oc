import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  // @Input() postTitle: string;
  // @Input() postContent: string;
  // @Input() postLove: number;
  // @Input() created: Date;

  constructor() { }

  ngOnInit() {
  }

  // getStatus() {
  //   return this.postLove;
  // }

  // getColor() {
  //   if(this.postLove > 0) {
  //     return "green";
  //   } else if(this.postLove <= 0) {
  //     return "red";
  //   }
  // }

}
