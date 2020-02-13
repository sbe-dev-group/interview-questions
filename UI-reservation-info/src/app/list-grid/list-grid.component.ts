import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { ListModel } from '../shared/models/list.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-list-grid',
  templateUrl: './list-grid.component.html',
  styleUrls: ['./list-grid.component.css']
})
export class ListGridComponent implements OnInit {
  @Input() list: ListModel;
  @Output() handleTotalPriceClick = new EventEmitter();
  modalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
