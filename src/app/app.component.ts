import { Component } from '@angular/core';
import {Content} from "./content-card/content-list-helper";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'example-project';
  item = {
    contentId: 1024,
    imageUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
    body: 'This is the body of the content',
    author: 'User',
    type: 'news',
    special: true // an extra value
  };
  processContent (content: Content): void {
    console.log(content.body);

  }
  constructor() {
    this.processContent(this.item);
  }
}
