import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReservationDisplayComponent } from './reservation-display/reservation-display.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app.route';
import { ListGridComponent } from './list-grid/list-grid.component';
import { BkendService } from './shared/services/bkend.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FilterPipe } from './shared/pipe';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    AppComponent,
    ReservationDisplayComponent,
    HeaderComponent,
    ListGridComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [BkendService],
  bootstrap: [AppComponent],
  exports: [FilterPipe]
})
export class AppModule { }
