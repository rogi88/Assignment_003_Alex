import { Component, OnInit } from '@angular/core';
import { Content } from '../content-card/content-list-helper';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  content: Content[];
  date: Date;
  titleCheck: string;
  constructor() { }

  ngOnInit() {
    this.date = new Date();
    this.content = new Array();
    this.content[0] = {
      contentId: 1024,
      author: 'User',
      title: 'Title',
      imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
      body: 'This is the body of the content',
      type: 'news',
      tags: ['this', 'is', 'a', 'tag', 'list']
    };
    this.content[1] = {
      contentId: 1025,
      author: 'User',
      title: 'Other Title',
      imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
      body: 'This is the content',
      type: 'stories'
    };
    this.content[2] = {
      contentId: 1026,
      author: 'User',
      title: 'Title',
      imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
      body: 'This is the body',
      type: 'stories',
      tags: ['more', 'tags']
    };
    this.content[3] = {
      contentId: 1027,
      author: 'User',
      title: 'Not title',
      imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
      body: 'This is the best',
      type: 'news'
    };
    this.content[4] = {
      contentId: 1028,
      author: 'User',
      title: 'Awesome title',
      imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
      body: 'This is even more of the best',
      type: 'news'
    };
  }
  clickEvent() {
    const numOfResults = this.content.filter(c => c.title === this.titleCheck).length;
    alert ('The number of items with that title is: ' + numOfResults);
}
}
