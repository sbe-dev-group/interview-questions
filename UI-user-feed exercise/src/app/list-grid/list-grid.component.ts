import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-grid',
  templateUrl: './list-grid.component.html',
  styleUrls: ['./list-grid.component.css']
})
export class ListGridComponent implements OnInit {
  @Input() userFeed;
  @Output() likesClicked = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  handleLike(id) {
    this.likesClicked.emit(id);
  }
}
