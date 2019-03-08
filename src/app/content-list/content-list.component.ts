import { Component, OnInit } from '@angular/core';
import { Content } from '../content-card/content-list-helper';
import { ContentService } from '../services/content.service';




@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  content: Content[];
  date: Date;
  titleCheck: string;
  contentItem: Content;


  constructor(private contentService: ContentService ) {
  // adding this component to bootstrap in app.module doens't inject dependency
  }

  ngOnInit() {
    this.date = new Date();
    this.contentService.getContent().subscribe(content => this.content = content);
  }
  clickEvent() {
    const numOfResults = this.content.filter(c => c.title === this.titleCheck).length;
    alert ('The number of items with that title is: ' + numOfResults);
}

  save(): void {
    this.contentService.updateContent(this.contentItem)
    .subscribe(() => console.log('Content updated'));
    }
}
