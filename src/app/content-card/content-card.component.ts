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

  @Input() item: Content;
  @Input () last: boolean;



  constructor() { }

  ngOnInit() {
  }
  clickImage() {
    console.log(this.item.contentId);
  }


}
