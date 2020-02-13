import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFeedComponent } from './user-feed/user-feed.component';


const appRoutes: Routes = [{
    path: '', redirectTo: '/home',
    pathMatch: 'full'
},
{ path: 'home', component: UserFeedComponent },

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
