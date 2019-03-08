import { Injectable } from '@angular/core';
import { Content } from '../content-card/content-list-helper';
import { content } from '../contentDB';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private messageService: MessageService) { }

  getContent(): Content[] {
    return content;
  }

  getContentObs(): Observable<Content[]> {
    this.messageService.add('ContentService: fetched content');
    return of(content);
    }
}
