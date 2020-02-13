import { Component, OnInit } from '@angular/core';
import { BkendService } from '../shared/services/bkend.service';
import { ListModel } from '../shared/models/list.model';

@Component({
  selector: 'app-reservation-display',
  templateUrl: './reservation-display.component.html',
  styleUrls: ['./reservation-display.component.css']
})
export class ReservationDisplayComponent implements OnInit {
  list: ListModel;
  response;
  datepickerModel;

  constructor(private bkendService: BkendService) {
  }

  ngOnInit() {
    console.log(this.bkendService.getData().subscribe((res) => {
      const data = res;
      this.list = data.map(x => new ListModel(x));
      console.log(this.list);
    }
    )
    );
  }
  handleDateFilter(event) {
    this.datepickerModel = event;
    console.log(event);
  }
  handleTotalPriceBreakDown(event) {
    console.log(event);
  }

}
