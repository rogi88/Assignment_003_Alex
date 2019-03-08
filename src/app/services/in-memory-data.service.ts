import { Injectable } from '@angular/core';
import { Content} from '../content-card/content-list-helper';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':
    'application/json' })
    };

  createDb(_reqInfo?: import('angular-in-memory-web-api').RequestInfo): {} | import('rxjs').Observable<{}> | Promise<{}> {

  const content: Content[] =
    [
      {
        contentId: 1024,
        author: 'User',
        title: 'Title',
        imgUrl: '',
        body: 'This is the body of the content',
        type: 'news',
        tags: ['this', 'is', 'a', 'tag', 'list']
      },
      {
        contentId: 1025,
        author: 'User',
        title: 'Other Title',
        imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
        body: 'This is the content',
        type: 'stories'
      },
      {
        contentId: 1026,
        author: 'User',
        title: 'Title',
        imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
        body: 'This is the body',
        type: 'stories',
        tags: ['more', 'tags']
      },
      {
        contentId: 1027,
        author: 'User',
        title: 'Not title',
        imgUrl: '',
        body: 'This is the best',
        type: 'news',
        tags: ['fdsfdsdsf', 'tadgfdgdfgfdgs', 'tagdfgfds', 'tadfgdfs', 'tagdfgfdgs', 'dfgfd']
      },
      {
        contentId: 1028,
        author: 'User',
        title: 'Awesome title',
        imgUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
        body: 'This is even more of the best',
        type: 'news'
      }
    ];
    return {content};
  }



  genId(content: Content[]): number {
    return content.length > 0 ? Math.max(...content.map(content => content.contentId)) + 1 : 2000;
  }
}
