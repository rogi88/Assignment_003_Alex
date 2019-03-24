import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
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

  @Input() contentList: Content[]; // I have sent the content list here

  @Output() addItemEvent = new EventEmitter();

  @Output() editItemsEvent = new EventEmitter();


  tempContentItem: Content;

  // Toggles allowing to create a new contact, condition: if content list didn't process a contact yet
  private _contentProcessed = false;

  private _editMode = false;

  private _itemToEdit: Content = undefined;


  constructor(private contentService: ContentService) {

  }



  @Input()
  set contentProcessed(newItemFlag: boolean) {
    this._contentProcessed = newItemFlag;
    if (this._contentProcessed === true) {
      this.createItem();
    }
    console.log(`Creation of new items ${this._contentProcessed ? 'enabled' : 'disabled'}`);
  }

  @Input()
  set itemToEdit(item: Content) {
    this._itemToEdit = item;
    this.createItem(item);
  }

  addItem() {
      this.addItemEvent.emit({
      eventName: 'create-content',
      data: this.tempContentItem});
  }

  editMode() {
    this._editMode = true;
    this._contentProcessed = false;
    this.editItemsEvent.emit({value: true});
  }

  ngOnInit() {

  }

  private createItem(itemToEdit?: Content): Content {
      if (itemToEdit === undefined) {
      this.tempContentItem = {
        contentId: this.contentService.genId(this.contentList),
        title: '',
        author: '',
        body: '',
        imgUrl: '',
        tags: [],
        type: 'stories'
      };

    } else {
      this.tempContentItem = {
        contentId: itemToEdit.contentId,
        title: itemToEdit.title,
        author: itemToEdit.author,
        body: itemToEdit.body,
        imgUrl: itemToEdit.imgUrl,
        tags: itemToEdit.tags,
        type: itemToEdit.type
      };
    }
    return this.tempContentItem;
  }


  updateTagProp(inputString: string) {
    const tempArray = inputString.split(',').filter( (element) => element !== '').map( (element) => element.trim());
    this.tempContentItem.tags = tempArray.filter( (element) => element !== '');
    console.log( this.tempContentItem.tags);
  }
}
