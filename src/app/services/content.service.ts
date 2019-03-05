import { Injectable } from '@angular/core';
import { Content } from '../content-card/content-list-helper';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  getContent(): Content[] {
    return CONTENT;
    }
}
