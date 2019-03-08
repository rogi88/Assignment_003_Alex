import { Injectable } from '@angular/core';
import { Content } from '../content-card/content-list-helper';
import { content } from '../contentDB';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':
    'application/json' })
    };

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getContent(): Observable<Content[]> {
    this.messageService.add('ContentService: fetched content');
    return this.http.get<Content[]>('api/content');
  }

  updateContent(content: Content): Observable<any> {
    return this.http.put('api/content', content,
    this.httpOptions);
  }

  addContent(content: Content): Observable<Content> {
    return this.http.post<Content>('api/content', content,
    this.httpOptions);
  }
  // getContentObs(): Observable<Content[]> {
  //   this.messageService.add('ContentService: fetched content');
  //   return of(content);
  //   }
}
