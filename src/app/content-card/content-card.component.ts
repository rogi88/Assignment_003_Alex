import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Content} from './content-list-helper';


@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {


  static defaultImage = 'https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg';

  radioButton = 'unchecked';

  @Input() item: Content;
  @Input() last: boolean;

  @Input() editMode = false;

  @Output() editMeEvent = new EventEmitter();

  constructor() { }

  editMe() {
    this.radioButton = 'checked';
    this.editMeEvent.emit({value: this.item.contentId});
    console.log(`Emmiting content id to edit : ${this.item.contentId}`);
  }


  ngOnInit() {
  }
  clickImage() {
    console.log(this.item.contentId);
  }


}
