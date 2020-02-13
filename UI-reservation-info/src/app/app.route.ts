import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationDisplayComponent } from './reservation-display/reservation-display.component';


const appRoutes: Routes = [{
    path: '', redirectTo: '/home',
    pathMatch: 'full'
},
{ path: 'home', component: ReservationDisplayComponent },

];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
