import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SafePipe } from './safe.pipe';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { FormsModule } from '@angular/forms';
import { ContentTypePipe } from './content-type.pipe';
import { TextDecorationDirective } from './text-decoration.directive';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService} from './services/in-memory-data.service';
import { CreateContentComponent } from './create-content/create-content.component';
import { ArrayToStringPipe } from './array-to-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    ContentListComponent,
    ContentCardComponent,
    ContentTypePipe,
    TextDecorationDirective,
    MessagesComponent,
    CreateContentComponent,
    ArrayToStringPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [], // Doesn't seem to be necessary
  bootstrap: [AppComponent]
})
export class AppModule { }
