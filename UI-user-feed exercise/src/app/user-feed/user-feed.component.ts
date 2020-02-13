import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';
import { UserFeedModel } from '../shared/models/user-feed.model';
import { StoreService } from '../shared/services/store.service';

@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.css']
})
export class UserFeedComponent implements OnInit {
  users: UserFeedModel;
  sample;
  constructor(
    private sharedservice: SharedService,
    private storeservice: StoreService
  ) { }

  ngOnInit() {
    this.sharedservice.getData().subscribe((res) => {
      this.storeservice.initialDataFeed = res.feed.map(x => new UserFeedModel(x));
      this.users = this.storeservice.initialDataFeed;
      // this.sample = this.user;
      console.log(this.users);
    }
    );
  }
  handleLikeClicked(event) {
    const likesId = this.storeservice.initialFeed.map(x => {
      if (x.id === event) {
        x.likes = x.likes + 1;
      }
      return x;
    });
    this.storeservice.initialFeed = likesId;
    this.users = this.storeservice.initialDataFeed;
    // console.log(likesId);
  }
  handleTweet(event) {
    this.users = this.storeservice.initialDataFeed;
  }
}
