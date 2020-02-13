import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserFeedComponent } from './user-feed/user-feed.component';
import { ListGridComponent } from './list-grid/list-grid.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.route';
import { SharedService } from './shared/services/shared.service';
import { StoreService } from './shared/services/store.service';
import { TweetBoxComponent } from './tweet-box/tweet-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserFeedComponent,
    ListGridComponent,
    TweetBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [SharedService, StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
