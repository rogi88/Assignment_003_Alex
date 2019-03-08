import { Injectable } from '@angular/core';
import { Content } from '../content-card/content-list-helper';
import { content } from '../contentDB';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  getContent(): Content[] {
    return content;
  }

  getContentObs(): Observable<Content[]> {
    return of(content);
    }
}
