import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLove: number;
  @Input() created: Date;

  constructor() { }

  ngOnInit() {
  }

  getStatus() {
    return this.postLove;
  }

  getColor() {
    if(this.postLove > 0) {
      return "green";
    } else if(this.postLove <= 0) {
      return "red";
    }
  }
}
