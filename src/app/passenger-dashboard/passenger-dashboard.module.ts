import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.conponent';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerDashboardService } from './passenger-dashboard.service';

//import HTTP module
import { HttpClientModule } from '@angular/common/http';

  


 @NgModule({
     declarations:[
         PassengerCountComponent,
         PassengerDetailComponent,
        PassengerDashboardComponent
     ],
     imports:[
        CommonModule,
        HttpClientModule
     ],
     exports:[
         //we dont need to export count and detail component because we use in dashboard component and dashboard component is already export in app component(means count and detail are in dashboard component and dashboard is in app component)
         PassengerDashboardComponent,
     ],
     providers:[
        PassengerDashboardService,
        
     ]
 })
 export class PassengerDashboardModule{

 }