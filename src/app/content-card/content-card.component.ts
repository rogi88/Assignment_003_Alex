import { Component, Input, OnInit, Output } from '@angular/core';
import {Content} from './content-list-helper';
import { EventEmitter } from 'protractor';
import { content } from '../contentDB';



@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {


  static defaultImage = 'https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg';

  radioButton = 'unchecked';

  @Output() radiosAndFields: EventEmitter = new EventEmitter();

  @Input() item: Content;
  @Input () last: boolean;

  @Input() edit: false;

  constructor() { }

  ngOnInit() {
  }
  clickImage() {
    console.log(this.item.contentId);
  }

  chooseForEdit() {
    this.radiosAndFields.emit(this.item.contentId.toString());
  }
}
