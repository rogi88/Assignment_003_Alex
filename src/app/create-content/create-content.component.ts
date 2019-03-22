import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ViewChild
} from '@angular/core';
import {
  Content
} from '../content-card/content-list-helper';
import {
  ContentService
} from '../services/content.service';


@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent implements OnInit {

  @Input() contentList: Content[];

  @Output() addItemEvent = new EventEmitter();

  tempContentItem: Content;

  private _newItemFlag = false;


  constructor(private contentService: ContentService) {

  }

  @Input()
  set newItemFlag(newItemFlag: boolean) {
    this._newItemFlag = newItemFlag;
    if (this._newItemFlag === true) {
      this.createItem();
    }
  }

  addItem() {
      this.addItemEvent.emit({
      eventName: 'create-content',
      data: this.tempContentItem});
  }

  ngOnInit() {

  }

  private createItem(): Content {
    this.tempContentItem = {
      contentId: this.contentService.genId(this.contentList),
      title: '',
      author: '',
      body: '',
      imgUrl: '',
      tags: [],
      type: 'stories'
    };
    return this.tempContentItem;
  }


  updateTagProp(inputString: string) {
    const tempArray = inputString.split(',').filter( (element) => element !== '').map( (element) => element.trim());
    this.tempContentItem.tags = tempArray.filter( (element) => element !== '');
    console.log( this.tempContentItem.tags);
  }
}
