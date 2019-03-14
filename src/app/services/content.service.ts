import { Injectable } from '@angular/core';
import { Content } from '../content-card/content-list-helper';
import { Observable} from 'rxjs';
/* import { MessageService } from './message.service'; */
import {  HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(/* private messageService: MessageService,*/ private http: HttpClient ) {
    console.log('Content service running');
  }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':
    'application/json' })
    };

    genIdPromise(): Promise<number> {
      // let id: number = content.length > 0 ? Math.max(...content.map(content => content.contentId)) + 1 : 2000;
      return new Promise( resolve => {
        return this.getContent().subscribe(result => {
          resolve(result[result.length - 1].contentId);
        });
      });
    }

    _genId(): void {
    let id: number;
    this.genIdPromise().then(res => {
      id = Number(res);
      return id;
      });
    }

    genId(content: Content[]): number {
      const id: number = content.length > 0 ? Math.max(...content.map(content => content.contentId)) + 1 : 2000;
      return id;
    }



  getContent(): Observable < Content[] > {

    return this.http.get<Content[]>('api/content');
  }

  updateContent(content: Content): Observable < any > {
    return this.http.put('api/content', content, this.httpOptions);
  }

  addContent(content: Content): Observable < Content > {
    return this.http.post<Content>('api/content', content, this.httpOptions);
  }


  // getContentObs(): Observable<Content[]> {
  //   this.messageService.add('ContentService: fetched content');
  //   return of(content);
  //   }
}
