import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Content } from '../content-card/content-list-helper';
import { ContentService } from '../services/content.service';
import { MessageService } from '../services/message.service';
import { CreateContentComponent } from '../create-content/create-content.component';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})

export class ContentListComponent implements OnInit {
  content: Content[];
  date: Date;
  titleCheck: string;

  contentProcessed = false;

  constructor(private contentService: ContentService, private messageService: MessageService ) {

  }

  ngOnInit() {
    this.date = new Date();
    this.contentService.getContent().subscribe(content => {
      this.messageService.add('ContentService: fetched content');
      this.contentProcessed = true;
      return this.content = content;
    });

  }
  clickEvent() {
    const numOfResults = this.content.filter(c => c.title === this.titleCheck).length;
    alert ('The number of items with that title is: ' + numOfResults);
  }

  save(event): void {
    this.contentService.updateContent(event.value)
    .subscribe(() => console.log('Content updated'));
  }


  addNewItem(event): void {
    console.log(event);
    this.contentProcessed = false;
    this.contentService.addContent(event.data)
      .subscribe(
        content => {
          this.content = this.content.concat(content);
          this.contentProcessed = true;
          console.log('Content Created');
      });
    }
  }
