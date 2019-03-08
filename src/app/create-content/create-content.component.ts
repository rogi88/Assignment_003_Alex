
import { Component, OnInit } from '@angular/core';
import { Content} from '../content-card/content-list-helper';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent implements OnInit {

  newItem: Content;


  constructor(private contentService: ContentService ) { }

  ngOnInit() {
  }

  createNewItem(){

  }

  addNewItem(): void {



    this.contentService.updateContent(this.contentItem)
    .subscribe(() => console.log('Content updated'));
    }
}
