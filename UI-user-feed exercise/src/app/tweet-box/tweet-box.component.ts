import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StoreService } from '../shared/services/store.service';
import { UserFeedModel } from '../shared/models/user-feed.model';

@Component({
  selector: 'app-tweet-box',
  templateUrl: './tweet-box.component.html',
  styleUrls: ['./tweet-box.component.css']
})
export class TweetBoxComponent implements OnInit {
  @Output() tweet = new EventEmitter();
  constructor(private store: StoreService) { }

  ngOnInit() {
  }
  handleTweetClick(event) {
    let data = this.store.initialDataFeed;
    const tweetInfo = {
      user: 'Current User',
      value: event,
      id: data.length + 1,
      timestamp: Date.now(),
      timeZoneOffset: new Date().getTimezoneOffset(),
      likes: 0,
    };
    const feed = new UserFeedModel(tweetInfo);
    data.push(feed);
    this.store.initialDataFeed = data;
    this.tweet.emit(data);
  }
}
