import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  initialFeed;
  constructor() { }
  set initialDataFeed(data) {
    this.initialFeed = data;
  }
  get initialDataFeed() {
    return this.initialFeed;
  }
}
